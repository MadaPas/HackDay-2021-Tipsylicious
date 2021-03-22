/* eslint-disable no-tabs */
import styled from 'styled-components';

export const StyledContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, .09);
`;

export const StyledHeading = styled.div`
    width: 50%;
    height: 100%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`;

export const StyledList = styled.ul`
    max-height: 100%;
    font-size: 20px;
    text-align: left;
    padding: 50px;
    border-radius: 5px;
    color: #565c9bea;

    li:nth-child(1) h1 {
    }
    li:nth-child(2) h1 {
    }
    li:nth-child(3) h1 {
    }
    li:nth-child(4) h1 {
    }
    li:nth-child(5) h1 {
    }
`;

export const StyledButton = styled.button.attrs({
  type: 'button',
})`
    width: fit-content;
    font-size: 18px;
    background-color: transparent;
    cursor: pointer;
    line-height: 2rem;
    padding: 0px 10px;
    text-decoration: none;
    border: 2px solid #754f7a;
    border-radius: 10px;
    outline: none;
    box-shadow: 0px 10px 14px -13px #5f3568;

    :hover {
        box-shadow: 0px 0px 5px #fff;
    }
`;
