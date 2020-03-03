import React from 'react';
import SearchBar from './form/searchBar.js';
import Title from './headers/title.js';
import List from './list/list.js';
import AddWine from './form/InputWines.js';

function App() {
  
  return (
    <>
    <Title></Title>
    <AddWine></AddWine>
    <SearchBar></SearchBar>
    <List></List>
    </>
  )
}

export default App;
