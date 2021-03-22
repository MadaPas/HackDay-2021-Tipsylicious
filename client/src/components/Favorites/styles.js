import styled from 'styled-components';

export const StyledFavCard = styled.div`
    position: relative;
    width: 20%;
    border-radius: 5px;
    transition: all .3s;
    list-style: none;
    animation: verticalSlide .5s;
`;
export const StyledContainer = styled.div`
    position: relative;
    width: 80%;
    margin-top: 4em;
    margin-left: 8em;
    padding: 0px 170px;
    display: flex;
    flex-direction: column;
    animation: fade 1s;
`;

export const StyledListCaption = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    transition: all .3s;
`;

export const StyledFavNumber = styled.button.attrs({
  type: 'button',
})`
    outline: none;
    width: 40px;
    height: 40px;
    font-size: 20px;
    border-radius: 50%;
    background-color: #fff;
    border: 1px solid #565c9bc4;
    margin-left: 5px;
    box-shadow: 1px 7px 14px -11px #001;
`;

export const StyledCardWrapper = styled.div`
    position: relative;
    width: 100%;
    margin: 70px 0px;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    transition: all .3s;
    margin-left: 2em;
`;
