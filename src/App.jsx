import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import BricksPage from "./pages/Bricks";
import ConstructionsPage from "./pages/Construction";
import ProjectsPage from "./pages/Projects";
import SolidBlocksPage from "./pages/SolidBlocks";
import SeptictankRingPage from "./pages/SeptictankRing";
import MSandPage from "./pages/MSand";
import PSandPage from "./pages/PSand";
import RiverSandPage from "./pages/RiverSand";
import CementPage from "./pages/Cement";
import RedBricksPage from "./pages/RedBricks";
import AACBlockPage from "./pages/AACBlock";
import InterlockMudPage from "./pages/InterlockMud";
import JalliPage from "./pages/Jalli";
import QuarryStonePage from "./pages/QuarryStone";
import GravelPage from "./pages/Gravel";
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
          path="/manufacturing-products/solid-blocks"
          element={<SolidBlocksPage/>}
        />

        <Route
          path="/manufacturing-products/septictank-ring"
          element={<SeptictankRingPage/>}
        />

        <Route
          path="/building-materials/m-sand"
          element={<MSandPage/>}
        />

        <Route
          path="/building-materials/p-sand"
          element={<PSandPage/>}
        />

        <Route
          path="/building-materials/river-sand"
          element={<RiverSandPage/>}
        />

        <Route
          path="/building-materials/cement"
          element={<CementPage/>}
        />

        <Route
          path="/building-materials/red-bricks"
          element={<RedBricksPage/>}
        />

        <Route
          path="/building-materials/aac-block"
          element={<AACBlockPage/>}
        />

        <Route
          path="/building-materials/interlock-mud-bricks"
          element={<InterlockMudPage/>}
        />

        <Route
          path="/building-materials/jalli"
          element={<JalliPage/>}
        />

        <Route
          path="/building-materials/quarry-stone"
          element={<QuarryStonePage/>}
        />

        <Route
          path="/building-materials/gravel"
          element={<GravelPage/>}
        />
               
        <Route
          path="/construction"
          element={<ConstructionsPage />}
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