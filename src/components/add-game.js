import React from 'react';
import {connect} from 'react-redux';
import {addGames, fetchGames} from '../actions';
import Async from 'react-select';
import './styles/add-game.css';
import {API_BASE_URL, debounce} from '../tools';

export class AddGame extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {games: []};
    this.getResults = debounce(this.getResults.bind(this), 300);
  }
  
  handleChange(selectedOption) {
    this.setState({ selectedOption });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const guids = this.state.selectedOption.map(game => game.value);
    this.props.dispatch(addGames({guid: guids}));
    this.props.dispatch(fetchGames(this.props.user));
    this.setState({games: [], selectedOption: []});
  }

  getResults(input) {
    if (!input) {
      return;
    }
    fetch(`${API_BASE_URL}/games/search/?${input}`, {
      headers: {
        Authorization: `Bearer ${this.props.authToken}`
      }
    })
    .then(res => res.json())
    .then(res => {
      this.setState({games: res});
    });
  }
  
  render() {
    
  const placeholder = "Add a game...";
    
  return (
    <div className="add-games">
      <h4>Add to Library</h4>
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <Async
          value={this.state.selectedOption}
          options={this.state.games}
          isSearchable 
          isMulti 
          placeholder={placeholder} 
          onChange={(e) => this.handleChange(e)}
          onInputChange={(input) => this.getResults(input)}
          noOptionsMessage={() => "Loading..."} />
        <input type="submit" />
      </form>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  authToken: state.app.authentication.authToken,
  user: state.app.authentication.user
});

export default connect(mapStateToProps)(AddGame);