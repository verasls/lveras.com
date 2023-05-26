import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Publications } from "./pages/Publications";

import "./index.css";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/publications" element={<Publications />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}
