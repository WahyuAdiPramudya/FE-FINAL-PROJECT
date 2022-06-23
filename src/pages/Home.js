import Footer from "../components/Footer/Footer.js";
import Hero from "../components/Hero/Hero.js";
import Navbar from "../components/Navbar/Navbar.js";
import Content from "../components/Content/Content.js";
import Dashboard from "../components/Dashboard/Dashboard.js";

function Main() {
  return (
    <main>
      <Hero />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Content />
      <Dashboard />
      <Footer />
    </>
  );
}

export default Home;
