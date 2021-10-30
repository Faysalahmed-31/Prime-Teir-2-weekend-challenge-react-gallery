import { useState } from "react";
import GalleryList from "../GalleryList/GalleryList";

function Body( props ){
    // const[name, setName]= useState( null );
    return(
        <div>
            <h1>Body</h1>
            <GalleryList galleryItems = {props.galleryItems}/>
        </div>
    )
}

export default Body;