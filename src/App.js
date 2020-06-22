import React, { Fragment } from 'react';
import NamePicker from './components/NamePicker'
import Search from './components/Search'

function App({ names }) {

  return (
    <Fragment>
      <Search />
      <NamePicker names={names}/>
    </Fragment>
    
  )
}

export default App;
