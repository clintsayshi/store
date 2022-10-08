import { Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Cart from "./pages/cart";
import Home from "./pages/home";
import Items from "./pages/items";
import ItemDetail from "./pages/item";
import Login from "./pages/login";
import NotFound from "./pages/notfound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/items/:Id" element={<ItemDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="notfound" element={<NotFound />} />
        <Route
          path="*"
          element={<Navigate to="/notfound" replace />}
          status={404}
        />
      </Routes>
    </div>
  );
}

export default App;
