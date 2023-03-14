 import React, { useContext } from 'react';
import AlertContext from '../../Context/alert/alertContext';

export const Alerts = () => {
    const alertContext = useContext(AlertContext);
    return (

        //check alerts length and if is up to 0, map and display received alerts  
        
        alertContext.alerts.length > 0 && alertContext.alerts.map(alert => (
            <div>

                <div className="flex flex-col space-y-4 min-w-screen h-screen animated  fadeIn faster   fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-gray-900  ">
                    <div className="flex flex-col p-8 bg-white shadow-md hover:shodow-lg opacity-90 rounded-2xl">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">

                                <div key={alert.id} className={`flex p-12 text-xl  ${alert.type} `}>

                                    <i className='fas fa-info-circle mx-8 text-2xl' />{alert.msg}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        ))
    )
};


export default Alerts;




/*
--use context--
Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. 
The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.
When the nearest <MyContext.Provider> above the component updates, this Hook will trigger a rerender with the latest context value passed 
to that MyContext provider.
 Even if an ancestor uses React.memo or shouldComponentUpdate, a rerender will still happen starting at the component itself using useContext.
 */


