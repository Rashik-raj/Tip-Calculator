import React from 'react'
import { FaHeartBroken } from 'react-icons/fa'
export default function NotFound() {
    return (
        <div>
            <br/>
            <FaHeartBroken size={200}/>
            <h1>404 page not found</h1>
            <h3>We are sorry but the page you are looking for does not exist.</h3>
        </div>
    )
}
