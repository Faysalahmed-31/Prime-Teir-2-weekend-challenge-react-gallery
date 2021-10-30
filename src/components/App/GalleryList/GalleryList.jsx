import { useState } from "react";
import GalleryItems from "../GalleryItems/GalleryItems";

function GalleryList( props ){
    // const[name, setName]= useState( null );
    return(
        <div>
            <h1>GalleryList</h1>
            { props.galleryItems.map( imageItems=>(<GalleryItems imageTosend={imageItems}/>))} 
        </div>
    )
}

export default GalleryList;