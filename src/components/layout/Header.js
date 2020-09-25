import React from 'react'

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>Tip Calculator</h1>
        </header>
    )
}

const headerStyle = {
    margin: '0',
    backgroundColor: '#3f3f3f',
    color: '#fff',
    padding: '10px'
}