import styled, {
//   css,
} from 'styled-components';

export const StyledPoster = styled.div`
    width: 100%;
    padding-bottom: 100%;
    overflow: hidden;
    display: block;
    position: relative;
    border-radius: 5px;

    img {
        width: 100%;
        min-height: 100%;
        position: absolute;
    }
`;

export const StyledPosterTitle = styled.div`
    padding: 10px;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
    box-shadow: 1px 5px 15px -5px #001;
    background-color: #b9bfff38;

    div > p {
        text-align: center;
        text-transform: capitalize;
        overflow: hidden;
    }
`;

export const StyledDiscoverButton = styled.button.attrs({
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

export const StyledPopup = styled.div`
    margin-top: 60%;
    background: lavender;
    display: flex;
    flex-direction: column;
    background: #adb1d8;
`;

export const StyledAlertBox = styled.ul`
    padding: 5px;
    border-radius: 5px;
`;

export const StyledPopupContent = styled.ul`
    padding: 6px;
    margin-top: 5px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, .10);
    background-color: hsla(0, 0%, 100%, .30);

    li:first-child p {
        padding: 10px 0px 0px 0px;
    }

    li p {
        width: 100%;
        font-size: 15px;
        padding: 0px 0px 10px 0px;
        text-transform: capitalize;
        overflow: hidden;
    }
`;

export const StyledClsButton = styled.button.attrs({
  type: 'button',
})`
      float: right;
      outline: none;
      width: 30px;
      height: 30px;
      font-size: 20px;
      cursor: pointer;
      border-radius: 50%;
      border: 1px solid transparent;

    :hover {
        background-color: #fff;
        box-shadow: 1px 5px 15px -5px #001;
    }
`;

export const StyledYesButton = styled.button.attrs({
  type: 'button',
})`
      width: 90%;
      font-size: 15px;
      margin: 8px 10px;
      line-height: 1.5rem;
      cursor: pointer;
      outline: none;
      border: 2px solid #565c9bc4;
      border-radius: 25px;
      text-decoration: none;
      box-shadow: 1px 5px 2px -5px #001;
      transition: all .2s;

    :hover {
        box-shadow: 0px 0px 5px #fff;
    }
`;

// export const StyledDeleteButton = styled.button.attrs({
//   type: 'button',
// })`
//     position: absolute;
//     top: 5px;
//     border: 1px solid transparent;
//     border-radius: 50%;
//     box-shadow: 1px 5px 15px -5px #001;
//     left: 5px;
//     cursor: pointer;
//     outline: none;
//     width: 30px;
//     height: 30px;
//     padding-top: 5px;
//     z-index: 999;
//     transition: all .4s;

//     :hover {
//         background-color: rgba(234, 207, 238, 0.20);
//         box-shadow: none;
//     }

//   ${props => props.isopen
//     && css`
//         display: none;
//         transition: all .4s;
//     `}
// `;
