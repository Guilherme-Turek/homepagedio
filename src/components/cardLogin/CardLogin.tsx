import { Container, TextField, Typography } from "@mui/material";
import { DButton } from "../Dbutton/Button";
import { handleLogin } from "../../services/handleLogin";
import { LoginForm } from "./LoginForm";

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
        <DButton content="Entrar" event={handleLogin} />
      </LoginForm>
    </Container>
  );
};
