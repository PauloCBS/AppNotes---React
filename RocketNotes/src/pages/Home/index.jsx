import {Container, Logo, Menu, Search, Content, NewNote} from "./styles";
import { Header } from "../../../components/Header";
import {ButtonText} from"../../../components/ButtonText";
import { FiPlus, FiSearch } from "react-icons/fi";
import { Input } from "../../../components/Input";
import { Section } from "../../../components/section";
import { Tag } from "../../../components/Tag";
import { Note } from "../../../components/Note";



export function Home(){
    return(
        <Container>
            <Logo>
                <h1>RocketNotes</h1>
            </Logo>
            <Header/>

            <Menu>
                <li><ButtonText title="All Notes" $isactive  /></li> 
                <li><ButtonText title="Node"/></li>
                <li><ButtonText title="React"/></li>
            </Menu>

            <Search>
                <Input placeholder="Search by title"/>
            </Search>

            <Content>
                <Section title="My notes">
                <Note data={{title: `React`,
                            tags: [
                                {id:'1', name: 'React'},
                                {id:'2', name: 'RocketSeat'}
                                ] //tag vetor.
                            }}/>
                </Section>
                
            </Content>

            <NewNote>
                <FiPlus/>
                New Note
            </NewNote>


        </Container>
    )
};


/* <li><ButtonText title="Frontend"/></li>  ->  Em JSX, quando você escreve o nome de uma prop sem atribuir um valor, ela é implicitamente considerada verdadeira (true).*/