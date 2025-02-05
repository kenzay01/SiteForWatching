import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen />,
      children: [],
    },
    {
      path: "/anime/:animeName",
      element: <h1>anime</h1>,
    },
  ]);
  return <RouterProvider router={router} />;
}
