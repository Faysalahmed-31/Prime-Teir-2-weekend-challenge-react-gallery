import { useState } from "react";

function GalleryItems( props ){
    // const[name, setName]= useState( null );
    return(
        <div>
            <h1>GalleryItems</h1>
            <p>props: { JSON.stringify( props ) }</p>
        </div>
    )
}

export default GalleryItems;