
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import Innerpage from "./pages/Innerpage";
import Layout from "./pages/Layout";
function App() {
  return (
    <Router>
      <>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/innerpage" element={<Innerpage/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </Layout>
      </>
    </Router>
  );
}

export default App;
