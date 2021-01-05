import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`

    ul {
        display: flex;
    }

    li {
        list-style: none;
        padding: 2rem 2rem 0;
        font-family: -apple-system, Roboto, sans-serif, serif;
    }
`

const NavLink = styled(Link)`
    text-decoration: none;
    font-weight: bold;
    color: #232129;

    transition: all 200ms ease;

    &:hover {
        color: rebeccapurple;
    }

`

const Main = styled.main`
    color: #232129;
    padding: 96px;
    font-family: -apple-system, Roboto, sans-serif, serif;
`

const Layout = ({ children }) => {
    return (
        <>
            <Nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/locations">Locations</NavLink>
                    </li>
                </ul>
            </Nav>
            <Main>
                {children}
            </Main>
        </>
    )
}

export default Layout
