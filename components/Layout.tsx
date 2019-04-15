import { useEffect, useReducer } from "react";
import '../style.scss';
import NavBar from "./NavBar";
import { appReducer } from "./reducer";
import { AppContext } from "./context";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(appReducer, {
        voting: null,
        competitions: [],
        loaded: false,
        auth: {
            authenticated: false,
            user: null,
            isAdmin: false,
        }
    }, (initialState: any) => {
        return initialState;
    });

    return (
        <AppContext.Provider value={{ dispatch, state }}>
            <div className="container">
                <NavBar />
                {children}
            </div>
            <style scoped jsx>{`
                .container {
                    max-width: 900px;
                    width: 100%;
                    margin: 0 auto;
                    padding: 0 10px;
                }
            `}</style>
        </AppContext.Provider>
    )
}

export default Layout;