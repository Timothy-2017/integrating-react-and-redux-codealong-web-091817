// import React, { Component } from 'react';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App" >
//         Counter Component here.
//       </div>
//     );
//   }
// }
//
// export default App;


import React, { Component } from 'react';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter store={this.props.store} />
      </div>
    );
  };
};

export default App;
