import React from "react";


const Loading = ()=>{
return(
    <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center  h-screen"> 
      
          <img  className="w-32 h-32 mx-auto" src="./assets/images/lang.png" alt="loading-image"/>

        <div className = "text-gray-700 font-semibold my-12">
           <h1>Please Wait</h1>  
        </div>
       
        </div>
        
    </div>
)
}
export default Loading;