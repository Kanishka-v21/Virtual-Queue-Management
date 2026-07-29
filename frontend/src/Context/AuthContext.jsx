import {
    createContext,
    useContext,
    useState,
    useEffect
} from "react";


const AuthContext = createContext();


export const AuthProvider = ({children}) => {


    const [user,setUser] = useState(null);


    useEffect(()=>{

        const storedUser =
        localStorage.getItem("userInfo");


        if(storedUser){

            setUser(
                JSON.parse(storedUser)
            );

        }


    },[]);



    const login = (userData)=>{

        setUser(userData);

        localStorage.setItem(
            "userInfo",
            JSON.stringify(userData)
        );

    };



    const logout = ()=>{

        setUser(null);

        localStorage.removeItem(
            "userInfo"
        );

    };



    return(

        <AuthContext.Provider
        value={{
            user,
            login,
            logout
        }}
        >

            {children}

        </AuthContext.Provider>

    );


};



export const useAuth = ()=>{

    return useContext(AuthContext);

};