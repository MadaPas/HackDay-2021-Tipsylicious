import styled from 'styled-components';

export const StyledTextHeading = styled.span`
    position: relative;
    display: block;
    padding: 30px 0;
    margin: 60px auto;
    align-self: center;
    border-top: solid 2px #949be29d;
    border-bottom: solid 2px #949be29d;
    color: #565c9bea;

    h2 {
        position: relative;
        font-size: 20px;
        margin: 0;
        white-space: nowrap;
        overflow: hidden;
        animation: typing 2s linear;
    }
`;

export const StyledContent = styled.div`
    margin: 15px auto;
`;
export const StyledForm = styled.form`
    position: relative;
    width: 100%;
    height: 40px;
    list-style: none;
    transition: all .3s;
`;
export const StyledFormInput = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for Drinks. Eg. Margarita ...',
  autoComplete: 'off',
})`
    position: relative;
    width: 100%;
    height: 100%;
    font-size: 1em;
    border-radius: 25px;
    border: 2px transparent;
    padding: 0px 45px 0px 20px;
    outline: none;
    overflow: hidden;
    white-space: nowrap;
    transition: all .3s;

    :hover {
        box-shadow: 1px 5px 5px -5px #001;
    }

`;
export const StyledButton = styled.button.attrs({
  type: 'button',
})`
    position: absolute;
    top: 6%;
    right: 1%;
    width: 35px;
    height: 35px;
    border: 1px solid transparent;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    background: #565c9bc4;
    color: #fff;

    :hover {
        color: #565c9bc4;
        background: white;
        border: 1px solid #565c9bc4;
    }
`;
export const StyledQuery = styled.div`
    padding-top: 30px;

    p > span {
        text-shadow: 0 0 2px #9098f1a1, 0 0 3px #bd98d3bb;        
        text-transform: capitalize;
        font-weight: 600;
        text-decoration: underline;
    }
`;
