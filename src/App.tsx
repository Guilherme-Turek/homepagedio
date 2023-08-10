import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./theme/theme";
import DefaultLayout from "./components/DefaultLayout/DefaultLayout";
import { CardLogin } from "./components/cardLogin";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<CardLogin />} />
            <Route path="/account" element={<h1>A</h1>} />
          </Routes>
        </DefaultLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
