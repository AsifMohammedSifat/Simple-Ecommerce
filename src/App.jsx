import { BrowserRouter, Route, Routes } from "react-router";
import Cart from "./components/Cart";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart/" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
