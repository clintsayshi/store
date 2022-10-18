import { Route, Routes } from "react-router-dom";
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
        <Route exact path="/" element={<Home />} />
        <Route exact path="/items" element={<Items />} />
        <Route exact path="/items/:Id" element={<ItemDetail />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path="/*" element={<NotFound />} status={404} />
      </Routes>
    </div>
  );
}

export default App;
