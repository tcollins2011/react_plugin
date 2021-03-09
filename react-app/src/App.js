import React, {useState} from "react";
import "./App.css";
import StoreFinder from './components/storeFinder/storeFinder'
import Menu from './components/menu/menu'

function App() {
 
  const [storeSelected, setStoreSelected] = useState({
    storeId: 0,

});

  if (storeSelected.storeId){
    return (
      <div className='holder'>
        <Menu Id={storeSelected.storeId} callBack={() => setStoreSelected}></Menu>  
      </div>
    );
  }

  return (
    <div className='holder'>
      <StoreFinder callBack={setStoreSelected}></StoreFinder>
    </div>
  );
}


export default App;

