import Footer from "./components/Footer";
import Header from "./components/Header";
import UseCase1 from "./components/JSX/UseCase1";
import UseCase2 from "./components/JSX/UseCase2";
import UseCase3 from "./components/JSX/UseCase3";
import UseCase4 from "./components/JSX/UseCase4";
import Login from "./components/Login";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Slider />
      <UseCase4 />
      <Footer />
    </div>
  );
}

export default App;
