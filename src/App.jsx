import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import BricksPage from "./pages/Bricks";
import ProjectsPage from "./pages/Projects";
// import ManufacturingProductsPage from "./pages/ManufacturingProductsPage";
// import BuildingMaterialsPage from "./pages/BuildingMaterialsPage";
// import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
       
        <Route
          path="/manufacturing-products/fly-ash-bricks"
          element={<BricksPage />}
        />
        <Route
          path="/projects"
          element={<ProjectsPage />}
        />
        

      </Routes>
    



        {/* <Route
          path="/manufacturing-products/solid-blocks"
          element={<SolidBlocks />}
        />

        <Route
          path="/manufacturing-products/hollow-blocks"
          element={<HollowBlocks />}
        />

        <Route
          path="/manufacturing-products/paver-blocks"
          element={<PaverBlocks />}
        /> */}
    </BrowserRouter>
  );
}

export default App;