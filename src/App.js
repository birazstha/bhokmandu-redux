import { RouterProvider } from "react-router-dom";
import { router } from "./route";
import "rsuite/dist/rsuite-no-reset.min.css";
import CartContextProvider from "./context/cart-context";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { initializeAuth } from "./store/auth/authThunk";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAuth());
  }, [dispatch]);

  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  );
}

export default App;
