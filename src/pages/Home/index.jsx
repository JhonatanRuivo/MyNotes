import { FiPlus, FiSearch } from 'react-icons/fi';
import { Brand, Container, Content, Menu, NewNote, Search } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Note } from '../../components/Note';
import { Section } from '../../components/Section';

import { ButtonText } from '../../components/ButtonText';

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>My Notes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="Todos" isActive /></li>
        <li><ButtonText title="Frontend" /></li>
        <li><ButtonText title="Node" /></li>
        <li><ButtonText title="React" /></li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note data={{
            title: 'Node',
            tags: [
              { id: '1', name: 'react' },
              { id: '2', name: 'sqlite' }
            ]
          }}
          />

        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota

      </NewNote>
    </Container>
  )
}