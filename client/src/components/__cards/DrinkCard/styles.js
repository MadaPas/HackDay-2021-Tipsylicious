import styled from 'styled-components';

export const StyledDrinkWrap = styled.div`
    position: relative;
    width: 80%;
    padding: 15px 150px;
    margin-top: 30px;
    margin-left: 10em;
    display: flex;
    flex-direction: column;
    animation: fade 1s;
`;

export const StyledButtonBack = styled.button.attrs({
  type: 'button',
})`
    position: absolute;
    width: 30px;
    height: 30px;
    font-size: 20px;
    cursor: pointer;
    outline: none;
    background-color: transparent;
    right: 90%;
    top: 20px;

    :hover {
        border-color: #B9BFFF;
      }

`;

export const StyledContent = styled.div`
    display: flex;
`;

export const StyledImageContainer = styled.div`
    position: relative;
    width: 40%;
    height: 0;
    padding-bottom: 30%;
    overflow: hidden;
    display: block;
    border-radius: 10px;

    img {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;;
    }
`;

export const StyledDetails = styled.div`
    position: absolute;
    width: 20em;
    height: 10em;
    top: 60px;
    left: 0px;
    padding: 10px;
    border-radius: 10px;
    background-color: #b9bfff8e;
`;

export const StyledFavorite = styled.div`
    width: 100%;
    padding: 5px 0px 5px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    li > h3 {
        margin-right: 20px;
        padding: 7px 0px 0px;
    }
`;

export const StyledFavButton = styled.button.attrs({
  type: 'button',
})`
    cursor: pointer;
    outline: none;
    width: 40px;
    height: 40px;
    border: 1px solid transparent;
    border-radius: 50%;
    box-shadow: 1px 5px 15px -5px #001;
    padding-top: 5px;
    transition: all .4s;
  
    :hover {
        box-shadow: none;
    }
  `;

export const StyledFavButtonAfter = styled.button.attrs({
  type: 'button',
})`
    cursor: pointer;
    outline: none;
    width: 40px;
    height: 40px;
    border: 1px solid transparent;
    border-radius: 50%;
    box-shadow: 1px 5px 15px -5px #001;
    background-image: linear-gradient(rgb(247, 16, 50), rgb(245, 142, 142));
    padding-top: 5px;
    transition: all .4s;

        :hover {
            box-shadow: none;
        }
    `;
export const StyledDrinkIngredients = styled.div`
    position: relative;
    width: 40%;
    padding: 15px 15px;

    div {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 15px 15px;
        border-radius: 10px;
        background-color: #b9bfff3f;

        h2 {
            padding-top: 10px;
          }

        ul {
            width: 100%;
            padding: 10px;
        }
    }
`;

export const StyledDrinkInstructions = styled.div`
    width: 80%;
    padding: 10px;
`;
