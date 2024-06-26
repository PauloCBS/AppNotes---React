import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import {Container, Content, Links } from "./styles";
import { Button } from '../../../components/buttons';
import { Header } from "../../../components/header";
import { Section } from "../../../components/section";
import { Tag } from "../../../components/Tag";
import {ButtonText} from"../../../components/ButtonText";





export function Details() {
  const[data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate()

function handleBack(){
  navigate(-1);
   //-1 is used to go back to the main page without adding it to the browser history. 
}

async function handleRemove(){
  const confirm = window.confirm("Are you sure you want to delete the note ?");

  if(confirm){
    await api.delete(`/notes/${params.id}`)
    navigate(-1);
  }
}


  useEffect(()=>{
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
      
    }

    fetchNote();
  }, []);



  return (

    <Container>

      <Header/>
        {
          data && 
          <main>
          <Content>
          <ButtonText title="Delete Note"
            onClick={handleRemove}/>
  
          <h1>
            {data.title}
          </h1>
  
          <p>
            {data.description}
          </p>
          
          {
            data.links &&
            <Section title= "Useful Links"    >
              <Links>
                {
                    data.links.map(link => (
                      <li key={String(link.id)}>
                        <a href={link.url} target="_blank">
                            {link.url}
                        </a>
                      </li>
                  ))
                }
              </Links>
            </Section>
          }
  
          {   
            data.tags &&
            <Section title="Bookmarks">
              {
                data.tags.map(tag =>(
                  <Tag 
                    key = {String(tag.id)}
                    title={tag.name}>
                  </Tag>
                ))
              }
            </Section>
          }
  
          <Button
           title="Back"
           onClick={handleBack}
           />
          
            
  
          </Content>
        </main>
        }
    </Container>
  )
}

  