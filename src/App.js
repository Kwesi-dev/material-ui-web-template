
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import Innerpage from "./pages/Innerpage";
import Layout from "./pages/Layout";
import { createTheme, ThemeProvider} from "@mui/material"

const theme = createTheme({
  typography: {
    fontFamily:[
      "Montserrat"
    ]
  },
  breakpoints: {
    values: {
      xs: 0,
      mobileSm: 340,
      mobile: 425,
      sm: 600,
      tablet: 768,
      md: 900,
      laptop: 1024,
      lg: 1200,
      xl: 1536,
    },
  }
})
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <Layout>
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/innerpage" element={<Innerpage/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
          </Layout>
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
