import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigation from "./components/Navigation/Navigation";
import MealPage from "./components/MealPage/MealPage";

const queryClient = new QueryClient();

const pages = import.meta.glob("./pages/*.jsx", { eager: true });
const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages\/(.*)\.jsx$/)[1];
  return {
    name,
    path: name === "Home" ? "/" : `/${name.toLowerCase()}`,
    component: pages[path].default,
  };
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <div className="app-content">
          <Navigation routes={routes} />
          <Routes>
            {routes.map(({ path, component: RouteComp }) => {
              return (
                <Route key={path} path={path} element={<RouteComp />}></Route>
              );
            })}
            <Route path="/meal/:id" element={<MealPage />} />
          </Routes>
        </div>
      </div>
    </QueryClientProvider>
  );
}
