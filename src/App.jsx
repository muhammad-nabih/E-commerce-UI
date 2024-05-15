import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import { Categories } from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import SidebarProvider from "./contexts/sidebarContext/SidebarContext";
import storeContext from "./contexts/storeContext/storeContext";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import CartProvider from "./contexts/CartContext/CartContext";
function App() {
  const [filter, setFilter] = useState("/products?populate=*");
  const [selectedCategory, setSelectedCategory] = useState([]);

  return (
    <SidebarProvider>
      <CartProvider>
        <Cart />
        <Navbar />
      </CartProvider>
      <storeContext.Provider
        value={{ filter, setFilter, selectedCategory, setSelectedCategory }}
      >
        <Categories />
      </storeContext.Provider>
      <Landing />
      <storeContext.Provider
        value={{ filter, setFilter, selectedCategory, setSelectedCategory }}
      >
        <CartProvider>
          <Products />
        </CartProvider>
      </storeContext.Provider>
      <Footer />
    </SidebarProvider>
  );
}

export default App;
