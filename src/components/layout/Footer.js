import React from 'react';
import { FaGithub, FaLinkedin, FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default function Footer() {
    return (
        <footer style={footerStyle}>
            <ListGroup>
                <ListGroupItem className="bg-dark">Coded by <b>Rashikraj Shrestha</b></ListGroupItem>
            </ListGroup>
            <a style={linkStyle} rel="noopener noreferrer" target="_blank" href="https://github.com/Rashik-raj"><FaGithub/></a>|
            <a style={linkStyle} rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/rashikraj-shrestha-b62b81157/"><FaLinkedin/></a>|
            <a style={linkStyle} rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/rashiks3/"><FaFacebookSquare/></a>|
            <a style={linkStyle} rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/rashik.shrestha/"><FaInstagram/></a>
        </footer>
    )
}

const footerStyle = {
    bottom: '0',
    position: 'fixed',
    backgroundColor: '#3f3f3f',
    color: '#fff',
    padding: '10px',
    width: '100%',
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    margin: '3px'
}
