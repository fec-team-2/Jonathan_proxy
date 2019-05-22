import React from 'react';
import ReactDOM from 'react-dom';

class Betsy extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
      return (
      <div>
        APPLICATION!!!!
        <div id='trevor'></div>
        <div id='jonathan'></div>
      </div>
      );
  }
}

ReactDOM.render(<Betsy />, document.getElementById('app'));
