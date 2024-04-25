import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { router } from "./router";
function App() {
  return (
    <div className="wrapper">
      <Header />
        <Routes>
          {router.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
        </Routes>
    </div>
  );
}

export default App;
