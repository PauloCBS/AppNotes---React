import styled from "styled-components";

export const Container = styled.header`

    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width:1px ;
    border-bottom-style:solid ;
    border-bottom-color:${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;

    padding: 0 80 px;

   
`

//a new export needs to be created to handle only the img and the text.
export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin-left: 22px;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`


export const ExitIcon = styled.div`

  border: none;
  background: none;
  align-self: center;
  margin-right: 22px;

  >svg{
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 36px;

  }

`
