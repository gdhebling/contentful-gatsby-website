import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const NavBar = styled.nav`

    display: flex;
    align-items: center;
    /* justify-content: space-between; */

    padding: 1rem 2rem;

    ul {
        display: flex;
    }

    li {
        list-style: none;
        padding: 0 2rem;
    }
`

const Logo = styled.h1`
    font-weight: 900;

    a {
        text-decoration: none;
        color: #232129;
        transition: all 200ms ease;

        &:hover {
        color: rebeccapurple;
    }
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

const Nav = () => {
    return (
        <>
            <NavBar>
                <Logo><Link to="/">Logo</Link></Logo>
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
            </NavBar>
        </>
    )
}

export default Nav
