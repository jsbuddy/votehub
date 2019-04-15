import { useContext, useEffect } from "react";
import { AppContext } from "./context";
import Router from "next/router";

export default function Guard(Component) {
    const { state } = useContext(AppContext, undefined);
    useEffect(() => {
        if (state.auth.authenticated && state.auth.isAdmin) {
            return Router.replace('/');
        }
    }, [])
    return (
        <Component />
    )
}