import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import WatchingScreen from "./pages/WatchingScreen";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen />,
      children: [],
    },
    {
      path: "/anime/:animeName",
      element: <WatchingScreen />,
    },
  ]);
  return <RouterProvider router={router} />;
}
