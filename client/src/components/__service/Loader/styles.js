/* eslint-disable no-tabs */
import styled from 'styled-components';

export const StyledPosition = styled.div`
    margin: 50px auto;
    display: flex;
    justify-content: center;
    width: 200px;
`;

export const StyledCircle = styled.div`
    margin: 5px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 3px;
    text-align: center;
    color: #fff;
    text-shadow: 0 3px 6px rgba(0, 0, 0, .16), 0 1px 2px rgba(0, 0, 0, .23);
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
    animation: horizontalFade 1s infinite alternate;
    background: #4d245e;
    animation-delay: .4s
`;
