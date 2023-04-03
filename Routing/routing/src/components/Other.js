import React from "react";
import { useParams } from "react-router-dom";

const Other = (props)=>{

    const {word,color,bgColor}= useParams();

    return(
        <div>
            {
                isNaN(word)?
                <p style={color?{color:color,backgroundColor:bgColor}:null}>
                    This is a Word:{word}
                </p>
                :
                <p>
                    This is a Number:{word}
                </p>
            }
        </div>
    )
}

export default Other;