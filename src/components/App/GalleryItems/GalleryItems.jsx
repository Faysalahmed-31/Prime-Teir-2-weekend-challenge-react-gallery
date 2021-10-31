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
       
        <div className = "images">
             {showimage && <img width = "190" height = "200" onClick={ toggleShow }  src = {props.imageToSend.path} alt ={props.imageToSend.description}/> } 
            { showDescription && <p onClick={ toggleShow }> {props.imageToSend.description}</p>}
            <div>
             <button className="likeButton" onClick={() =>changeLikes (props.imageToSend.id)}> Like 👍🏻  </button> 
             <button className = "commentImages ">Comment</button>
             <h4 className = "likes">How many people love this: { props.imageToSend.likes }</h4>
             </div>
        </div>
     
        )
    
}

export default GalleryItems;