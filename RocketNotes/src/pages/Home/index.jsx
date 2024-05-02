import { useState, useEffect } from 'react';
import { api } from "../../services/api";
import {Container, Logo, Menu, Search, Content, NewNote} from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../../components/header";
import {ButtonText} from"../../../components/ButtonText";
import { FiPlus, FiSearch } from "react-icons/fi";
import { Input } from "../../../components/Input";
import { Section } from "../../../components/section";
import { Note } from "../../../components/Note";







export function Home(){

    const[tags, setTags] = useState([]);
    const[tagsSelected, setTagsSelected] = useState([]);
    const [search, setSearch] = useState("");
    const [notes, setNotes] = useState([]);

    
    const navigate = useNavigate();

    function handleTagSelected(tagName){
        const  alreadySelected = tagsSelected.includes(tagName)

        if(tagName === "all"){
            return setTagsSelected([]);
        }

        if(alreadySelected){
            const filteredTags = tagsSelected.filter(tag => tag !== tagName);
            setTagsSelected(filteredTags);
        }else{
            setTagsSelected(prevState => [...prevState, tagName]);
        }

        
    } 

    function handleDetails(id){
       
        navigate(`/details/${id}`); 
    } 

    

    useEffect(() => {
        async function fetchTags(){
            const response = await api.get("/tags");
            setTags(response.data);
        }

        fetchTags(); 
    }, []);

    useEffect(()=>{
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
            setNotes(response.data);
        }

        fetchNotes();

    },[tagsSelected, search])

  

    return(
        <Container>
            <Logo>
                <h1>RocketNotes</h1>
            </Logo>
            <Header/>

            <Menu>
                <li><ButtonText
                    title="All Tags"
                    $isactive = {tagsSelected.length === 0}
                    onClick={() => handleTagSelected("all")}
                /></li>
                {
                    tags && tags.map(tag => (
                        <li key={String(tag.id)}>
                            <ButtonText
                            title={tag.name}
                            $isactive = {tagsSelected.includes(tag.name)}
                            onClick={() => handleTagSelected(tag.name)}
                            />
                        </li>
                    ))
                }
                
            </Menu>

            <Search>
                <Input 
                    placeholder="Search by title"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Search>

            <Content>
            
                    <Section title="My notes">
                        {
                            notes.map(note =>(
                            <Note
                            key={String(note.id)} 
                            data={note}
                            onClick={() => handleDetails(note.id)}/>
                            ))         
                        }
                        
                    </Section>
                
            </Content>

            <NewNote to="/new">
                <FiPlus/>
                New Note
            </NewNote>


        </Container>
    )
};

