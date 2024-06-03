import { BrowserRouter, RouterProvider, Route , createRoutesFromElements, createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Movie from "./pages/Movie";
import Root from "./pages/Root";
import { loader as movieloader } from "./pages/Home";
import './App.css';
import { loader as Moviesingle } from "./pages/Movie";
const router=createBrowserRouter(createRoutesFromElements(
<Route path='/' element={<Root/>} errorElement={<Error/>}>
   <Route index element={<Home/>} loader={movieloader}/>
   <Route path="/error" element={<Error/>}/>
   <Route path="/detail/:imdbID" element={<Movie/>} loader={Moviesingle}/>
</Route>))
function App() {
  return (
    <div> <RouterProvider router={router}/></div>
   );

}

export default App;
