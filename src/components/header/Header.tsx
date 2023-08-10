import React from "react";
import { Container } from "@mui/material";
import { useTheme } from "@mui/material/styles"; // Importe o useTheme
import { StyledAppBar, HeaderText } from "./styles";

export const Header: React.FC = () => {
  const theme = useTheme();

  return (
    <StyledAppBar position="static" theme={theme}>
      <Container maxWidth="xl">
        <HeaderText variant="h3" noWrap align="center">
          Dio Bank
        </HeaderText>
      </Container>
    </StyledAppBar>
  );
};
