import { TextArea } from '../../../components/TextArea'
import { NoteItem } from '../../../components/NoteItem'
import { Section } from '../../../components/Section'
import { Button } from '../../../components/Buttons'
import { Header } from '../../../components/Header'
import { Input } from '../../../components/Input'
import { Container, Form } from './styles'
import { Link } from 'react-router-dom'

export function NewNote() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Create Note</h1>
            <Link to="/">back</Link>
          </header>

          <Input placeholder="Title" />
          <TextArea placeholder="Note" />

          <Section title="useful links">
            <NoteItem value="https://rocketseat.com.br" />
            <NoteItem  $isNew  placeholder="new link" />
          </Section>

          <Section title="bookmarks">
            <div className="tags">
              <NoteItem   value="react" />
              <NoteItem  $isNew placeholder="New tag" />
            </div>
          </Section>

          <Button title="Save" />
        </Form>
      </main>
    </Container>
  )
}