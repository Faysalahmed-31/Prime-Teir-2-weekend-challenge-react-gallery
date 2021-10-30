import React,{ useState } from "react";

function GalleryItems( props ){
    // const[name, setName]= useState( null );
    const [showimage, setShowimage]=useState( true);
    const [showDescription, setshowDescription]=useState( false);
    const [likes, setLikes]=useState( 0 );

    
    const toggleShow = () =>{
        setShowimage(!showimage);
        setshowDescription(!showDescription)
     }
     const changeLikes = (imagetoLikeid) =>{
        setLikes(imagetoLike + 1)
     }

    return(
        
        <div >
    {showimage && <img onClick={ toggleShow } className="Image" src = {props.imageToSend.path} alt ={props.imageToSend.description}/>}
                <div>
                            { showDescription && <p onClick={ toggleShow }> {props.imageToSend.description}</p>}
                            <button className="likeButton" onClick={() =>changeLikes(props.imageToSend.id)}> Love   </button>
                            <h4>How many people love this: { likes }</h4>

                </div>
                
        </div>
    
     
        )
    
}

export default GalleryItems;