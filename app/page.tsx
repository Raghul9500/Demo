import Navbar from "../compontents/navbar";
import Home from "../compontents/home";
import Features from "../compontents/features";
import About from "../compontents/about";
import Portfolio from "../compontents/portfolio";
import Pricing from "../compontents/pricing";
import Blog from "../compontents/blog";
import Support from "../compontents/support";
import Footer from "../compontents/footer";
export default function mainpage() {
  return (
    <div>
      <Navbar />
      <Home />
      <Features />
      <About />
      <Portfolio />
      <Pricing />
      <Blog />
      <Support />
      <Footer />
    </div>
  );
}
