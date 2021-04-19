import React, {useState} from "react";
import "./App.css";
import StoreFinder from './components/storeFinder/storeFinder'
import Menu from './components/menu/menu'

function App() {
 
  // Creates an overarching empty state that looks for a store ID
  const [storeSelected, setStoreSelected] = useState({
    storeId: 0,

});

// If there is a store ID return the Menu Component
  if (storeSelected.storeId){
    return (
      <div className='holder'>
        <Menu Id={storeSelected.storeId} callBack={() => setStoreSelected}></Menu>  
      </div>
    );
  }

  // If there is no store ID return the storeFinder component 
  return (
    <div className='holder'>
      <StoreFinder callBack={setStoreSelected}></StoreFinder>
    </div>
  );
}


export default App;

