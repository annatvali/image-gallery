import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./MainPage";
import HistoryPage from "./HistoryPage";
import ImageModal from "./ImageModal";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        path: 'image/:id',
        element: <ImageModal />,
      },
    ],
  },
  {
    path: '/history',
    element: <HistoryPage />,
    children: [
      {
        path: ':searchTerm/image/:id',
        element: <ImageModal />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />
};

export default App;
