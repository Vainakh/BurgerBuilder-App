import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import KingdomBuilder from './containers/KingdomBuilder/KingdomBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <KingdomBuilder/>
        </Layout>
      </div>
    );
  } 
}

export default App;
