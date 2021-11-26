import './App.css';
import * as configcat from 'configcat-js';
import React from 'react'

function App() {
  const [flag, setFlag] = React.useState();
  let logger = configcat.createConsoleLogger(3);
  let configCatClient = configcat.createClient(
    'vbDZCLcHv0GI5_74YlKRlw/PgAR95nsYUq2qzWKlN0Jwg',
    {
      logger: logger,
    }
  );
  configCatClient
    .getValueAsync('display_msg', false)
    .then((value) => {
      setFlag(value)
    });
  if(flag){
    return (<h1>Hello!!!! How are You?</h1>)
  }
  else if(!flag){
    return (<h1>Loading...</h1>)
  }
}

export default App;
