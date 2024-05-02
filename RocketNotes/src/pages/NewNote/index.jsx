import { TextArea } from '../../../components/TextArea';
import { NoteItem } from '../../../components/NoteItem';
import { Section } from '../../../components/section';
import { Button } from '../../../components/buttons';
import { Header } from '../../../components/header';
import { Input } from '../../../components/Input';
import { Container, Form } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../services/api';


export function NewNote() {

  const [title, setTitle] = useState("");
  const [description , setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddLink(){
    setLinks(prevState => [...prevState, newLink]);
    setNewLink("");
  };

  function handleRemoveLink(deleted){
    setLinks(prevState => prevState.filter(link => link !== deleted))
  };

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  };

  function handleRemoveLink(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  };

  function handleBack(){
    navigate(-1);
  }

 
  async function handleNewNote(){

    if(newTag || newLink ||!title){
      return (
        alert("I think you are forgetting something behind, please check your note (title, tags and links)")
      )
    }

    await api.post("/notes", {
      title,
      description, 
      tags,
      links
    });

    alert("Note sucessfully created");
    navigate(-1);
  }

  function handleSubmit(event) {
    event.preventDefault(); // This stops the form from submitting normally
    // Here you can add what you want to do after the form is submitted

  };



  return (
    <Container>
      <Header />

      <main>
        <Form onSubmit={handleSubmit} >
          <header>
            <h1>Create Note</h1>
            <Link  onClick={handleBack}> back</Link>
          </header>

          <Input
           placeholder="Title"
           onChange = {e => setTitle(e.target.value)}
           />

          <TextArea 
            placeholder="Note"
            onChange={ e => setDescription(e.target.value)}

           />

          <Section title="useful links">

            {
              links.map((link, index) => (
                <NoteItem 
                  key = {String(index)}
                  value = {link}
                  onClick = {() => handleRemoveLink(link)}
                  />
              ))
            }
            <NoteItem 
              $isNew 
              placeholder="new link"
              value = {newLink}
              onChange ={e => setNewLink(e.target.value)}
              onClick = {handleAddLink}
              />
          </Section>

          <Section title="bookmarks">
            <div className="tags">
              {
                tags.map((tag, index) => ( 
                  <NoteItem
                    key={String(index)}
                    value = {tag}
                    onClick ={() => handleRemoveLink(tag) }
                />
                ))
              }
              <NoteItem
                $isNew 
                placeholder="New tag"
                value = {newTag}
                onChange ={e => setNewTag(e.target.value)}
                onClick={handleAddTag}

                />
            </div>
          </Section>

          <Button
            type="submit"
            title="Save"
            onClick = {handleNewNote}
            />
        </Form>

      </main>
    </Container>
  )
}
