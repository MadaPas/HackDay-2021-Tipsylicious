import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 1200px;
    margin: 0 auto;
`;

export const StyledNav = styled.nav`
    width: 100%;
    padding: .7em;
    margin: .8em 0;
    display: flex;
    justify-content: space-between;
    z-index: 99;
`;

export const StyledLogo = styled.div`
    color: rgba(121, 72, 121, 0.781);
    font-size: 1.2em;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
`;

export const StyledList = styled.ul`
    li {
        position: relative;
        color: #000;
        cursor: pointer;
        text-decoration: none;
        display: flex;
        justify-content: center;

        a {
            color: #551a8b;
            text-decoration: none;
            border: 2px solid transparent;
            
            :hover {
                color: #5f3568;
            }

            :before {
                content: "";
                position: absolute;
                top: 110%;
                height: 2px;
                width: 0%;
                left: 3px;
                background: #551a8b;
            }

            :hover:before {
                width: 97%;
                background: #5f3568;
            }
        }
    }
`;
