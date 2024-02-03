import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from "./components/Navbar.js";
import AppNavigation from "./components/AppNavigation.js";


function App() {
  return (
    <div>
      <Navbar />
      <AppNavigation />
    </div>
  );
}

export default App;
