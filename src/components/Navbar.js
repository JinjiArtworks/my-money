
import React from 'react'
// Styles
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.title}>
                    <Link to='/'>My Money</Link>
                </li>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link>
            </ul>
        </nav>
    )
}

export default Navbar
