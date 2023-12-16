// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react'
import { Container, Links, Content } from "./styles";
import { useParams, useNavigate} from 'react-router-dom';

import { api } from '../../services/api';

import { Header } from "../../components/Header";
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import { Tags } from '../../components/Tags'

export function Details () {
  const [ data, setData ] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  
  function handleBack() {
    navigate(-1)
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fecthNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data); 
    }

    fecthNote()
  }, [params.id])
  
  return (
    <Container>
      <Header />
      
      {
        data && 
        <main>
        <Content>
          <ButtonText onClick = {handleRemove} title="Excluir Nota"/>

          <h1>
            {data.title}
          </h1>

          <p> 
            {data.description}
          </p>

          {
            data.links &&
            <Section title="Links úteis"> 
              <Links>
                {
                  data.links.map(link => (
                  <li key = {String(link.id)}>
                    <a href={link.url} target="_blank" rel="noreferrer" >{link.url}</a>
                  </li>
                  ))
                }       
              </Links>
            </Section>
          }

          {
            data.tags &&
            <Section title="Marcadores"> 
             { 
              data.tags.map(tag => (
                <Tags 
                  key = {String(tag.id)}
                  title={tag.name}
                />
              ))
             }
            </Section>
          }

          <Button title= "Voltar" onClick={handleBack}/> 
        </Content>
        </main>
      }
    </Container>
  )
}