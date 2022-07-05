import Home from "./pages/Home";
import
{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AllRoutes from "./router";

function App ()
{
  return (
    <div className="text-3xl font-bold">

      <BrowserRouter>

        <Routes>

          {

            AllRoutes.map( (routeItem, index) => (


              <Route path={ routeItem.path } element={ <routeItem.layout /> } key={ "route-" + index }>
                <Route element={ <routeItem.component /> } index />
              </Route>

            ) )

          }







        </Routes>

      </BrowserRouter>

      <Home />
    </div>
  );
}

export default App;
