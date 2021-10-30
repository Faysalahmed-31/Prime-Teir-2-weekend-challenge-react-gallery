import { useState } from "react";

function GalleryItems( props ){
    // const[name, setName]= useState( null );
    return(
        <div>
         {
               <>
                <img src = {props.imageToSend.path} />
                <h1>{props.imageToSend.description}</h1>
                </>
         }
          
            
        </div>
    )
}

export default GalleryItems;