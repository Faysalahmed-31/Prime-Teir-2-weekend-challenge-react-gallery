import React from 'react';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from "react";
// import Body from './Body/Body';
import GalleryList from './GalleryList/GalleryList';


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
  const updateLikes = (imagesLikedId)=>{
    axios({
      method: 'PUT',
      url: `/gallery/like/ ${imagesLikedId}`,
    }).then((response)=>{
     getItems();
  
    }).catch((error)=>{
     alert('liking in the an image');
     console.log(error())
    })
    
  }
    return (
      <div className="App">
        <header className="App-header">
          <strong><h1 className="App-title">Photos of My Life</h1></strong>
        </header>
        {/* <p>Gallery goes here</p> */}
        {/* <img src="images/goat_small.jpg"/> */}
        < GalleryList galleryItems= {galleryItems} updateLikes={updateLikes} />
      </div>
    );
}

export default App;
