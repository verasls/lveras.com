import { Header } from "./components/Header";
import { Home } from "./pages/Home";

import "./index.css";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
    </>
  );
}
