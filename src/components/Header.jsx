import React from 'react'
import { Container,Image } from 'react-bootstrap';
import UEFALOGO from "../assets/logo.avif"

const Header = () => {
  return (
    <Container>

    <Image width="200px" src={UEFALOGO}/>
    <h1 className='display-4 fw-bold font-monospace my-2 uefa'>⚽UEFA 2024</h1>

    </Container>
  )
}

export default Header