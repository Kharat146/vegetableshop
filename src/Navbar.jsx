import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(path, label) {
    return (
        <Link to={path}>
            <button as="li">{label}</button>
        </Link>
        
    )
}
