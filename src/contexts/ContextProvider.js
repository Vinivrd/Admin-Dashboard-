import React,{createContext,useContext,useState} from "react";


const StateContext = createContext();

const initialState = {
    chat:false,
    cart:false,
    userProfile:false,
    notification:false,
}



export const ContextProvider = ({children}) => {
    const [screenSize,SetScreenSize] = useState(undefined);
    const [currentColor,setCurrentColor] = useState('#03C9D7');
    const [currentMode,setCurrentMode] = useState('Light');
    const [activeMenu,setActiveMenu] = useState(true);
    const [isCliked,setIsClicked] = useState(initialState);
    const[themeSettings,setThemeSettings] = useState(false);

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
        setThemeSettings(false);
    }

    const setColor = (color) => {
        console.log(color)
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
        setThemeSettings(false);
    }


    const handleClick = (clicked) => {
        setIsClicked({...initialState,[clicked]:true})
    }

    return (
        <StateContext.Provider
            value = {{
                activeMenu, setActiveMenu,
                isCliked,setIsClicked,
                handleClick,
                screenSize,SetScreenSize,
                currentColor,currentMode,
                setCurrentColor,setCurrentMode,
                themeSettings,setThemeSettings,
                setMode,setColor
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);