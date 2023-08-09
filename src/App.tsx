import { Grid } from "@mui/material";
import { CardLogin } from "./components/cardLogin";
import { Header } from "./components/header";

function App() {
  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      sx={{
        background: "linear-gradient(135deg, #f8f9fa, #ced4da)",
        minHeight: "100vh",
      }}
    >
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12} md={8} sx={{ marginTop: "-225px" }}>
        <CardLogin />
      </Grid>
    </Grid>
  );
}

export default App;
