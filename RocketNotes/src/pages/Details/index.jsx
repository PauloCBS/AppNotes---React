import { Fragment } from "react";
import {Container} from "./styles";
import { Button } from '../../../components/buttons/index';

 

export function Details() {
  return (

    <Container>

      <h1>Fragment Test</h1>
      <span>Testando o fragment</span>
      <Button title="login1"/>
      <Button title="login2"/>
      <Button title="login3"/>
    </Container>
  )
}

  