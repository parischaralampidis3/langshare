import React from 'react';


//flex justify-around z-10 w-8 h-8 flex-wrap
const  Hamburger = () =>{
    return(
        <div className="md:hidden flex top-0 right-0 z-20 relative cursor-pointer w-8 h-8 flex-wrap focus:outline-none">
            
            <div className="w-8 h-1 rounded-xl bg-black"/>
            <div className="w-8 h-1 rounded-xl bg-black"/>
            <div className="w-8 h-1 rounded-xl bg-black"/>
            </div>
      
    )
}

export default Hamburger;