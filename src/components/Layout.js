import React from 'react'
import styled from 'styled-components'
import GlobalStyle from '../theme/globalStyles'
import Nav from './Nav'

const Main = styled.main`
    color: #232129;
    padding: 96px;
`

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Nav />
            <Main>
                {children}
            </Main>
        </>
    )
}

export default Layout
