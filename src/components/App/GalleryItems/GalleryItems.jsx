import React,{ useState } from "react";

function GalleryItems( props ){
    // const[name, setName]= useState( null );
    const [showimage, setShowimage]=useState( true);
    const [showDescription, setshowDescription]=useState( false);

    const toggleShow = () =>{
       setShowimage(!showimage);
       setshowDescription(!showDescription)
    }

    return(
        <div onClick={ toggleShow }>
         
                 {showimage && <img className="Image" src = {props.imageToSend.path} alt ={props.imageToSend.description}/>}
                { showDescription && <p>{props.imageToSend.description}</p>}
      
        </div>
    )
}

export default GalleryItems;