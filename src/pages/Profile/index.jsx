import { Link } from 'react-router-dom';

import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Avatar, Container, Form } from "./styles";

export function Profile() {
  return (
    <Container>

      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/jhonatanruivo.png"
            alt="Foto do usuário." />

          <label htmlFor="avatar">
            <FiCamera />

            <input
              id="avatar"
              type="faile" />
          </label>

        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          input

        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />
        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />
        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Salvar" />
      </Form>

    </Container>
  );
}