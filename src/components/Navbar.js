import React from 'react'
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
    width: 100%;
    height: 10vh;
    display: flex;
`

export default function Navbar() {
    return (
        <NavbarWrapper>
            <div className="Navbar"> 
                <div>Página inicial</div>
                <div>Meu perfil</div>
            </div>
        </NavbarWrapper>
    )
}
