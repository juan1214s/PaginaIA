import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/pages/home";
import PoliticPrivacy from "./components/pages/politicPrivacy";
import ScrollToTop from "./components/scrollToTop"

function App() {
  return (
    <>
    <ScrollToTop />
        <Routes>
      {/* Rutas con Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        {/* Puedes añadir aquí otras rutas con Layout */}
      </Route>

      {/* Rutas sin Layout */}
      <Route path="/politicas" element={<PoliticPrivacy />} />
    </Routes>
    </>
  );
}

export default App;
