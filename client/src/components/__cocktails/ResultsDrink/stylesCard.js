import styled from 'styled-components';

export const StyledListContainer = styled.ul`
    position: relative;
    width: 21%;
    border-radius: 5px;
    transition: all .5s;
    list-style: none;
    animation: verticalSlide .5s;
`;

export const StyledPoster = styled.li`
    width: 100%;
    padding-bottom: 100%;
    overflow: hidden;
    display: block;
    position: relative;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;

    img {
        width: 100%;
        min-height: 100%;
        position: absolute;
    }

    span {
        position: absolute;
        width: 10em;
        height: 2em;
        top: 10px;
        display: block;
        padding: 5px;
        border-radius: 4px;
        background-color: #b9bfffad;
        font-weight: 500;      
    }
`;

export const StyledMoreInfo = styled.div`
    padding: 10px;
    box-shadow: 1px 5px 15px -5px #001;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: #b9bfff38;

    li > p {
        text-align: center;
        text-transform: capitalize;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`;

export const StyledButton = styled.button.attrs({
  type: 'button',
})`
    width: 100%;
    font-size: 15px;
    margin: 8px 0px;
    line-height: 1.5rem;
    cursor: pointer;
    outline: none;
    border: 2px solid #565c9bc4;
    border-radius: 20px;
    text-decoration: none;
    background: transparent;

    :hover {
        box-shadow: 1px 5px 15px -5px #001;
    }
  `;
