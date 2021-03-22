import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 60%;
    margin: 0 auto;
    font-size: 15px;
    color: #565c9bea;

    h2 {
        position: relative;
        padding: 1em 2em;
    }
`;

export const StyledCardWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    grid-gap: 2.5rem;
    gap: 2.5rem;
    padding: 10px 15px;
`;

export const StyledPagination = styled.nav`
    width: 100%;
    display: block;
    justify-content: space-between;
`;

export const StyledPaginationList = styled.ul`
     align-items: center;
     display: flex;
     justify-content: center;
     text-align: center;
`;

export const StyledPaginationEl = styled.span`
    font-size: 1em;
    justify-content: center;
    margin: .25rem;
    padding: 0 .5em;
    text-align: center;
`;
