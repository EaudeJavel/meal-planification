import React from 'react';
import { InlineButton } from './MealPlanner/MealPlanner.styles';

export const ButtonContainer = ({
  activeComponent,
  setActiveComponent,
  children,
  componentName,
}) => (
  <div
    style={{
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginRight: "64px",
      height: "100%",
    }}
  >
    <InlineButton
      onClick={() => setActiveComponent(componentName)}
      isActive={activeComponent === componentName}
      style={{ display: "flex", alignItems: "center" }}
    >
      {children}
    </InlineButton>
    {activeComponent === componentName}
  </div>
);