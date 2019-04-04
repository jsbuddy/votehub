import { Fragment, useEffect } from "react";
import '../style.scss';
import NavBar from "./NavBar";

export default ({ children }) => {

    useEffect(() => {
        document.title = 'Vote Hub';
    }, []);

    return (
        <Fragment>
            <div className="container">
                <NavBar />
                {children}
            </div>
            <style scoped jsx>{`
                .container {
                    max-width: 1000px;
                    width: 100%;
                    margin: 0 auto;
                    padding: 0 20px;
                }
            `}</style>
        </Fragment>
    )
}