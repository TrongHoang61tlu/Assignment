
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RandomPage from "./pages/UserRandom";


function App() {
  return (
     <BrowserRouter>
        <h1 className=" font-semibold text-4xl flex justify-center ">Danh sách người dùng</h1>
        <Routes>
          <Route path="/" element = {<RandomPage />} />
        </Routes>
     </BrowserRouter>
  );
}

export default App;
