import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height:  100vh;

    display: grid;
   grid-template-rows:105px  auto;
   grid-template-areas: "header" "content";

   >main{
    grid-area: content;
    overflow-y: scroll ;
    padding: 64px 0;
   }
   
`


export const Content = styled.div`
    max-width: 550px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

   >button:first-child{
    align-self: end;
    font-weight: 500;
    padding-top: 64px;
   }

    > p{
        text-align: justify;
        font-size: 16px;
        margin-top: 16px;

    }
`
