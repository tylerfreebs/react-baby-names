import React, { Fragment, useState } from 'react';
import NamePicker from './components/NamePicker'
import Search from './components/Search'
import ShortList from './components/ShortList';
import ResetSearch from './components/ResetSearch'


function App() {
  const [searchValue, setSearchValue] = useState('')
  const [shortList, setShortList] = useState([])

  return (
    <Fragment>
      <main>
        <Search 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
        />
        <ShortList
          shortList={shortList} 
          setShortList={setShortList}
        />
        <NamePicker 
          searchValue={searchValue} 
          shortList={shortList} 
          setShortList={setShortList}
        />
        <ResetSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </main>
    </Fragment>
    
  )
}

export default App;
