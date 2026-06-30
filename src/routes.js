import { createBrowserRouter } from "react-router-dom";

// Import your existing components
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

// Home Page
function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Process />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

// Lander Page (test page)
function Lander() {
  return <h1 style={{ padding: "50px" }}>Lander Page Working ✅</h1>;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/lander",
    element: <Lander />,
  },
]);