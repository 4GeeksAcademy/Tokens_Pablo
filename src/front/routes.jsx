import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import { CreateUser } from "./pages/CreateUser";
import PrivateRoute from "./pages/PrivateRoute";
import { PrivatePage } from "./pages/PrivatePage";

export const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

        <Route path= "/" element={<Home />} />
        <Route path="/single/:theId" element={ <Single />} />  {/* Dynamic route for single items */}
        <Route path="/demo" element={<Demo />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/privatepage" element={
          <PrivateRoute>
            <PrivatePage />
          </PrivateRoute>
        } />
      </Route>
    )
);