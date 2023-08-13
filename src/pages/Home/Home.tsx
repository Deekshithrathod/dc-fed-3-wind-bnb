import "./Home.css";
import Navbar from "../../components/NavBar/Navbar";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
