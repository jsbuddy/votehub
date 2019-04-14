import Link from 'next/link';
import * as React from "react";
import { FiHome, FiArchive } from 'react-icons/fi';
import { useContext } from 'react';
import { AppContext } from './context';

const NavBar = () => {
    const { state } = useContext(AppContext, undefined);
    console.log({ state });
    return (
        <>
            {
                state.auth.isAdmin ?
                <div className="navbar">
                    <div className="logo" />
                    <ul className="menu">
                        <li><Link href="/"><a title="Home"><FiHome /></a></Link></li>
                        <li><Link href="/competitions"><a title="Manage Competitions"><FiArchive /></a></Link></li>
                    </ul>
                </div> : <div className="no-menu"/>
            }
            <style scoped jsx>{`
                .navbar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 100px;
                    padding: 1.5rem;
                }
                .menu {
                    display: flex;
                    align-items: center;
                    list-style: none;
                }
                .menu li a {
                    margin-left: 10px;
                    text-decoration: none;
                    color: #ccc;
                    /* color: slategrey; */
                    padding: 1rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .menu li a.active,
                .menu li a:hover {
                    padding: .6rem 1rem;
                    background: rgba(63, 81, 181, 0.1);
                    border-radius: 4px;
                }
                .no-menu {
                    margin-bottom: 20px;
                }
            `}</style>
        </>
    )
}

export default NavBar;