import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import WatchingScreen from "./pages/WatchingScreen";
import SearchScreen from "./pages/SearchScreen";
import { animeList } from "./constant/animeList";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen animeList={animeList} />,
      children: [],
    },
    {
      path: "/anime/:animeName",
      element: <WatchingScreen />,
    },
    {
      path: "/search/:searchValue",
      element: <SearchScreen />,
    },
  ]);
  return <RouterProvider router={router} />;
}
