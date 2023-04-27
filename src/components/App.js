// create your App component here
import React, {useEffect,useState} from "react";

function App(){
    const [image,setImage]= useState("")

    const url = "https://dog.ceo/api/breeds/image/random"

    useEffect(()=>{
        fetch(url)
        .then(r => r.json())
        .then(data=>{
            console.log(data.message)
            setImage(data.message)
        })
    },[])
    if(image===""){
        return <p>Loading...</p>
    }

    return(
        <div>
            <img src={image} alt="A Random Dog" />
        </div>
    )


}

export default App;