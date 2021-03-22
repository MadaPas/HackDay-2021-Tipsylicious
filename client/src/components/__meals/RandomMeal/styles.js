import styled from 'styled-components';

export const StyledListContainer = styled.ul`
    position: relative;
    width: 55%;
    padding: 5px;
    transition: all .3s;
    list-style: none;
`;

export const StyledPoster = styled.li`
    width: 100%;
    padding-top: 20px;

    img {
        width: 100%;
        border: 5px double #7981da41;
        object-fit: cover;
        border-radius: 50%;
    }
`;

export const StyledName = styled.li`
    p, span {
        text-align: center;
        border-radius: 4px;
        border: 1px solid #7981da79;
        background-color: #9098f12c;
    }
`;

export const StyledCategory = styled.span`
    font-size: 18px;
    display: block;
    position: absolute;
    border-radius: 4px;
    border: 1px solid #7981da79;
    top: -2%;
    background-color: #9098f12c;
`;

export const StyledButton = styled.button.attrs({
  type: 'button',
})`
    width: 100%;
    font-size: 18px;
    margin-top: 5px;
    line-height: 2rem;
    cursor: pointer;
    outline: none;
    border: 2px solid #7981da79;
    background-color: #9098f12c;
    border-radius: 5px;
    text-decoration: none;
    transition: all .2s;

    :hover {
        box-shadow: 0px 10px 10px -13px black;
    }
`;
