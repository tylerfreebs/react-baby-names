import React, { Fragment, useState } from 'react';
import NamePicker from './components/NamePicker'
import Search from './components/Search'

function App({ names }) {
  const [searchValue, setSearchValue] = useState('')

  return (
    <Fragment>
      <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
      <NamePicker names={names} searchValue={searchValue}/>
    </Fragment>
    
  )
}

export default App;
