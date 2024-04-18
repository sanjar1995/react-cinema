import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { router } from "./router";
import { useAxiosInterceptor } from "./api/ClientApi";
import Loading from "./components/UI/Loading";
function App() {
  const { loading } = useAxiosInterceptor();
  return (
    <div className="wrapper">
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          {router.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
        </Routes>
      )}
    </div>
  );
}

export default App;
