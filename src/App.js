import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import Home from "./pages/home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <ToastContainer closeButton={true} position="top-right" />
    </Layout>
  );
}

export default App;
