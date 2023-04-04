import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import MealPage from "./components/MealPage";
import { Container, Content } from './styles';
const pages = import.meta.glob('./pages/*.jsx', { eager: true });

const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages\/(.*)\.jsx$/)[1];
  return {
    name,
    path: name === 'Homepage' ? '/' : `/${name.toLowerCase()}`,
    component: pages[path].default,
  };
});

export function App() {
  return (
    <Container>
      <Navigation routes={routes} />
      <Content>
        <Routes>
          {routes.map(({ path, component: RouteComp }) => {
            return (
              <Route key={path} path={path} element={<RouteComp />}></Route>
            );
          })}
           <Route path="/meal/:id" element={<MealPage />} />
        </Routes>
      </Content>
    </Container>
  );
}
