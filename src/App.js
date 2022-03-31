import Navbar from "./components/Navbar";
import FeatureLg from "./pages/FeatureLg";
import Features from "./pages/Features";
import Home from "./pages/Home"
import Testimonial from "./pages/Testimonial";
function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Features/>
      <Testimonial/>
      <FeatureLg/>
    </>
  );
}

export default App;
