import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
// import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MyMoves from "./routes/MyMoves.jsx";
import MyProfile from "./routes/MyProfile.jsx";
import GetQoute from "./routes/GetQoute.jsx";
import Logout from "./routes/Logout.jsx";
import Error from "./routes/Error.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route path="" element={<MyMoves />} />
      <Route path="mymoves" element={<MyMoves />} />
      <Route path="myprofile" element={<MyProfile />} />
      <Route path="getqoute" element={<GetQoute />} />
      <Route path="logout" element={<Logout />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
