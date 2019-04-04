import React, { Fragment } from 'react'
import Link from 'next/link';

export default function NavBar() {
    return (
        <Fragment>
            <div class="navbar">
                <div className="logo"></div>
                <ul class="menu">
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/competitions"><a>Competitions</a></Link></li>
                </ul>
            </div>
            <style scoped jsx>{`
            .navbar {
                border: 2px solid red;
            }
        `}</style>
        </Fragment>
    )
}
