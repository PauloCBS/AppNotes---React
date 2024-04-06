import { Fragment } from "react";
import {Container} from "./styles";
import { Button } from '../../../components/buttons';
import { Header } from "../../../components/header";
import { Section } from "../../../components/section";
import { Tag } from "../../../components/tags";
 

export function Details() {
  return (

    <Container>
      <Header/>
    <Section title= "Useful Links"    >
      <li><a href=""></a>www.google.com</li>
      <li><a href=""></a>www.google.com</li>
    </Section>
    <Section title="Bookmarks">
      <Tag title="Express"></Tag>
      <Tag title="NodeJS"></Tag>
    </Section>


      <Button title="Back"/>
    
    </Container>
  )
}

  