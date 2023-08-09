import { Container, TextField, Typography } from "@mui/material";
import { ButtonLogin } from "../button/Button";
import { LoginForm } from "./LoginForm";
import { handleLogin } from "../../services/handleLogin";

export const CardLogin: React.FC = () => {
  return (
    <Container maxWidth="xs">
      <LoginForm>
        <Typography variant="h5" align="center">
          Faça seu login
        </Typography>
        <TextField
          fullWidth
          label="E-mail"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Senha"
          variant="outlined"
          margin="normal"
          type="password"
        />
        <ButtonLogin content="Entrar" event={handleLogin} />
      </LoginForm>
    </Container>
  );
};
