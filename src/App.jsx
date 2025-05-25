import Layout from "./components/layout";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";  // Agregar la importación de Home
import WhoWeAre from "./components/pages/whoWeAre/whoWeAre";

function App() {
  return (
    <Layout>  
      {/* Definiendo las rutas correctamente */}
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/whoWeAre" element={<WhoWeAre />} />
      </Routes>
    </Layout>
  );
}

export default App;
