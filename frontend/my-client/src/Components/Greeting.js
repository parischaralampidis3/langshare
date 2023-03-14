import React from 'react';


function Greeting() {
  let timeOfDay;
  const date = new Date();
  const hours = date.getHours();
 
  if (hours < 12) {
    timeOfDay = 'morning';
 
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon';
    
  } else {
    timeOfDay = 'night';
  }

  return (
      <div className='container mx-auto'> 
       <div className='text-2xl font-semibold -mx-8 bg-gray-100 px-12  w-1/5 p-5'>
       <h1> Good {timeOfDay},</h1>
       </div>
       </div>
  
  )
};
export default Greeting;