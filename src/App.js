import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Blogs from "./pages/Blogs";
import FeatureLg from "./pages/FeatureLg";
import Features from "./pages/Features";
import Home from "./pages/Home"
import Pricing from "./pages/Pricing";
import Testimonial from "./pages/Testimonial";
function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Features/>
      <Testimonial/>
      <FeatureLg/>
      <Pricing/>
      <Blogs/>
      <Footer/>
    </>
  );
}

export default App;
