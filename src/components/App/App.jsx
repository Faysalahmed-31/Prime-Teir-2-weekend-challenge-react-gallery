import React from 'react';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import Body from './Body/Body';


function App() {

  const[galleryItems, setgalleryItems] = useState( [] );

  useEffect( ()=>{
    console.log( 'component loaded' );
    getItems();
  }, []);

  const getItems=()=>{
    axios.get( '/gallery' ).then( (response)=>{
      console.log(response.data);
      setgalleryItems( response.data );
    }).catch((err)=>{
      alert('nope');
      console.log(err);
    })
  }
  
  

    return (
      <div className="App">
        <header className="App-header">
          <strong><h1 className="App-title">Photos of My Life</h1></strong>
        </header>
        {/* <p>Gallery goes here</p> */}
        {/* <img src="images/goat_small.jpg"/> */}
        <Body galleryItems = {galleryItems}/>
      </div>
    );
}

export default App;
