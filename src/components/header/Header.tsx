import { AppBar, Toolbar, Typography, Container } from "@mui/material";

export const Header: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#343a40", color: "#fff" }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography
            variant="h4"
            noWrap
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Homepage DIO
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
