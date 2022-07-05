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
            AllRoutes.map(
              ( item, index ) => (
                <Route path="/" element={ <item.layout /> } key={ "pages-routes-" + index }>
                  <Route index element={ <item.component /> } />
                </Route>
              )
            )
          }
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
