import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { getProducts } from "./features/product/productSlice";
import routes from "./routes/routes";

function App() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch]);

  return (
    <div>
      <Toaster/>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
