import { AppBar, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.secondary.main};
  padding: 25px;
`;

export const HeaderText = styled(Typography)`
  font-family: monospace;
  font-weight: 700;
  letter-spacing: 0.3rem;
`;
