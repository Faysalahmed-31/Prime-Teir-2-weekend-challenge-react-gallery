import { useState } from "react";
import GalleryItems from "../GalleryItems/GalleryItems";

function GalleryList( props ){
    // const[name, setName]= useState( null );
    return(
        // mapping through the list array 
        <div className = "imageList">
            {/* <h1>GalleryList</h1> */}
            { props.galleryItems.map( imageItems=>(<GalleryItems imageToSend={imageItems} updateLikes={props.updateLikes}/>))} 
        </div>
    )
}

export default GalleryList;