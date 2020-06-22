import React, { Fragment, useState } from 'react';
import NamePicker from './components/NamePicker'
import Search from './components/Search'
import ShortList from './components/ShortList';
import ResetSearch from './components/ResetSearch'

function App({ names }) {
  const [searchValue, setSearchValue] = useState('')
  const [shortList, setShortList] = useState([])

  return (
    <Fragment>
      <Search 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
      />
      <ShortList
        names={names}
        shortList={shortList} 
        setShortList={setShortList}
      />
      <NamePicker 
        names={names} 
        searchValue={searchValue} 
        shortList={shortList} 
        setShortList={setShortList}
      />
      <ResetSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </Fragment>
    
  )
}

export default App;
