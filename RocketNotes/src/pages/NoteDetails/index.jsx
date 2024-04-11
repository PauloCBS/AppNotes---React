import { Fragment } from "react";
import {Container, Content } from "./styles";
import { Button } from '../../../components/Buttons';
import { Header } from "../../../components/Header";
import { Section } from "../../../components/Section";
import { Tag } from "../../../components/Tag";
import {ButtonText} from"../../../components/ButtonText";
import { Link } from "react-router-dom";


export function Details() {
  return (

    <Container>

      <Header/>
      <main>
        <Content>
        <ButtonText title="Delete Note"/>

        <h1>What's Node.js</h1>

        <p>
            Environment that offers resources to write and execute JavaScript. Known as JS runtime environment. Node allows for creating websites, automation, and even an API.

            It can be used for the backend of applications, front end, microservices, machine learning, AI, and scripts and automation.
        </p>
        
        <Section title= "Useful Links"    >
          <li><a href=""></a>www.google.com</li>
          <li><a href=""></a>www.google.com</li>
        </Section>

        <Section title="Bookmarks">
          <Tag title="Express"></Tag>
          <Tag title="NodeJS"></Tag>
        </Section>

        <Link to="/">
          <Button title="Back"/>
        </Link>
          

        </Content>
      </main>
    </Container>
  )
}

  