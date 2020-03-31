import React, { Component } from 'react';
import Layout from "./hor/Layout/Layout";
import Archive from "./containers/Archive/Archive";


class App extends Component {
  render () {
    return (
            <Layout>
                <div style={{color:'#cc0'}}>
                    <h4>Personal</h4>
                </div>
                <Archive/>
            </Layout>
    );
  }
}

export default App;
