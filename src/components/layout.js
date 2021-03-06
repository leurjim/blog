import React from 'react';
import {Link} from 'gatsby'
import styled from 'styled-components';

const BodyStyles = styled.div`
    align-content: center;
    align-items: center;
    justify-items: center;
    nav {
        margin: 2rem;
        padding: 1rem;
        text-align: left;
        list-style: none;
        align-items: center;
    }
    main {
        text-align: center;
        list-style: none;
        align-items: center;
    }
    footer {
        margin: 2rem;
        text-align: center;
        background: lightgrey;
        list-style: none;
        align-items: center;
    }
`

const Layout = ({children}) => (
    <BodyStyles>
        <header>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </header>
        <main>{children}</main>
        <footer>
            <p>Un gracioso footer</p>
        </footer>
    </BodyStyles>
)

export default Layout;