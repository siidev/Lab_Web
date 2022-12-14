import React from 'react';
import './States.css';

/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    console.log('window.cs142models.statesModel()', window.cs142models.statesModel());
  }

  render() {
    return (
      <div>
        <h1>Problem	2</h1>
        {
          window.cs142models.statesModel() + "  "
        }
      </div>
    );
  }
}

export default States;
