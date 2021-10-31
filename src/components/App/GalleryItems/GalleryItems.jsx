import React,{ useState } from "react";

function GalleryItems( props){
    // const[name, setName]= useState( null );
    const [showimage, setShowimage]=useState( true);
    const [showDescription, setshowDescription]=useState( false);
    //const [likes, setLikes]=useState( 0 );

    
    
    const toggleShow = () =>{
        setShowimage(!showimage);
        setshowDescription(!showDescription);
     }
     const changeLikes = (imagesLikedId) =>{
        props.updateLikes(imagesLikedId);
     }

    return(
       
        <div className = "imageList">
             {showimage && <img onClick={ toggleShow }  src = {props.imageToSend.path} alt ={props.imageToSend.description}/> } 
            { showDescription && <p onClick={ toggleShow }> {props.imageToSend.description}</p>}
             <button className="likeButton" onClick={() =>changeLikes (props.imageToSend.id)}> Love  </button> 
             <h4>How many people love this: { props.imageToSend.likes }</h4>
        </div>
     
        )
    
}

export default GalleryItems;