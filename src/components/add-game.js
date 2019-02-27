import React from 'react';
import {connect} from 'react-redux';
import {addGames} from '../actions';
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
  }
  
  printValues() {
    console.log(this.state.value);
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
      console.log(this.state.games);
    });
  }
  
  render() {
    
  const placeholder = "Add a game...";
    
  return (
    <div className="add-games">
      <h4>Add to Library</h4>
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <Async
          options={this.state.games}
          isSearchable 
          isMulti 
          placeholder={placeholder} 
          onChange={(e) => this.handleChange(e)}
          onInputChange={(input) => this.getResults(input)}
          noOptionsMessage={(input) => "Loading..."} />
        <input type="submit" />
      </form>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  authToken: state.app.authentication.authToken
});

export default connect(mapStateToProps)(AddGame);