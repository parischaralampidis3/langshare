import { createContext } from "react";


const authContext = createContext();


export default authContext;  


/* Creates a Context object. When React renders a component that subscribes to this Context object it will read the 
current context value from the closest matching Provider above it in the tree. */