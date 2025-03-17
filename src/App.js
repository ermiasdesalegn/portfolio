import {  RouterProvider } from 'react-router-dom';  // Import required routing components
import MainRoute from "./routing/MainRoute";


function App() {
  return (
    <RouterProvider router={MainRoute} />  // Use RouterProvider to provide routes
  );
}

export default App;
