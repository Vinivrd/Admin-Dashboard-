import React,{createContext,useContext,useState} from "react";


const StateContext = createContext();

const initialState = {
    chat:false,
    cart:false,
    userProfile:false,
    notification:false,
}



export const ContextProvider = ({children}) => {
    
    const [activeMenu,setActiveMenu] = useState(true);
    const [isCliked,setIsClicked] = useState(initialState)
    const [screenSize,SetScreenSize] = useState(undefined)

    const handleClick = (clicked) => {
        setIsClicked({...initialState,[clicked]:true})
    }

    return (
        <StateContext.Provider
            value = {{
                activeMenu, setActiveMenu,
                isCliked,setIsClicked,
                handleClick
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);