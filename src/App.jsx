import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigation from "./components/Navigation/Navigation";
import MealPage from "./components/MealPage/MealPage";
import MealPlanner from "./components/MealPlanner/MealPlanner";
import WeeklyCalendar from "./components/WeeklyCalendar/WeeklyCalendar";
import { AppContainer } from "./styles.jsx";

const queryClient = new QueryClient();
const pages = import.meta.glob("./pages/*.jsx", { eager: true });

const getRoutes = () => {
  return Object.keys(pages).map((path) => {
    const name = path.match(/\.\/pages\/(.*)\.jsx$/)[1];
    return {
      name,
      path: name === "Home" ? "/" : `/${name.toLowerCase()}`,
      component: pages[path].default,
    };
  });
};

const CalendarNavigation = ({ selectedDate, onSelectDate }) => (
  <div style={{display:"flex", flexDirection:"column"}}>
    <Navigation routes={getRoutes()} />
    <WeeklyCalendar selectedDate={selectedDate} setSelectedDate={onSelectDate} />
  </div>
);

export function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  const handleSelectDate = (date) => {
    setSelectedDate(date);
    navigate("/plan");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <div className="app-content">
          <CalendarNavigation selectedDate={selectedDate} onSelectDate={handleSelectDate} />
          <AppContainer>
            <Routes>
              {getRoutes().map(({ path, component: RouteComp }) => (
                <Route key={path} path={path} element={<RouteComp />} />
              ))}
              <Route path="/meal/:id" element={<MealPage />} />
              <Route path="/plan" element={<MealPlanner selectedDate={selectedDate} />} />
            </Routes>
          </AppContainer>
        </div>
      </div>
    </QueryClientProvider>
  );
}
