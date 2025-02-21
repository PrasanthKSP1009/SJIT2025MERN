import Home from "./components/FunctionalComponents/Home";
import About from "./components/FunctionalComponents/About";
import Gallery from "./components/FunctionalComponents/Gallery";
import Contact from "./components/FunctionalComponents/Contact";
import Signup from "./components/FunctionalComponents/Signup";
import Navbar from "./components/FunctionalComponents/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseEffect from "./components/FunctionalComponents/Hooks/UseEffect";
import UseState from "./components/FunctionalComponents/Hooks/UseState";
import Login from "./components/FunctionalComponents/Login"
import UseEffectAPI from "./components/FunctionalComponents/Hooks/UseEffectAPI";
import UseRef from "./components/FunctionalComponents/Hooks/UseRef";
import UseMemo from "./components/FunctionalComponents/Hooks/UseMemo";
import UseCallback from "./components/FunctionalComponents/Hooks/UseCallback";
import UseMemoize from "./components/FunctionalComponents/Hooks/UseMemoize";
import HoC from "./components/FunctionalComponents/HoC/HoC";
import Memo from "./components/FunctionalComponents/Memoization/Memo";
import LazyLoadingAndSuspense from "./components/FunctionalComponents/Memoization/LazyLoadingAndSuspense.jsx";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home properties="Hello" sjit="SJIT" />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/use-state" element={<UseState />} />
          <Route path="/use-effect" element={<UseEffect />} />
          <Route path="/use-effect-api" element={<UseEffectAPI />} />
          <Route path="/use-ref" element= {<UseRef />} />
          <Route path="/use-memo" element= {<UseMemo />} />
          <Route path="/use-callback" element= {<UseCallback />} />
          <Route path="/use-memoize" element= {<UseMemoize />} />
          <Route path="/hoc" element= {<HoC />} />
          <Route path="/memo" element= {<Memo />} />
          <Route path="/lazy" element= {<LazyLoadingAndSuspense />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
