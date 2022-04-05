import Blogs from "../pages/Blogs";
import FeatureLg from "../pages/FeatureLg";
import Features from "../pages/Features";
import Home from "../pages/Home"
import Pricing from "../pages/Pricing";
import Testimonial from "../pages/Testimonial";
const Homepage = () => {
  return (
    <>
        <Home/>
        <Features/>
        <Testimonial/>
        <FeatureLg/>
        <Pricing/>
        <Blogs/>
    </>
  )
}

export default Homepage