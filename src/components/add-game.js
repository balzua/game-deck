import React from 'react';
import Select from 'react-select';

export default class AddGame extends React.Component {
  render() {
  
  //Later, this component will be replaced with an asynchronous version which searches the GiantBomb API for games.
  
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];
    
  const placeholder = "Add a game...";
    
  return (
    <div className="add-games">
      <h4>Add to Library</h4>
      <Select options={options} isSearchable isMulti placeholder={placeholder} />
    </div>
    );
  }
}