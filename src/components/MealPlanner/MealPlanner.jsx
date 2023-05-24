import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SelectMeal from "../SelectMeal/SelectMeal";
import CreateMeal from "../CreateMeal/CreateMeal";
import { addMealTemplate } from "../Api";
import { MdQuestionMark, MdAdd } from "react-icons/md";
import { Helper, Button, MealPlannerContainer } from "./MealPlanner.styles";
import { Heading, SubHeading, PageContainer } from "../../styles";
import { getDateString } from "../../utils/getDateString";
import { ButtonContainer } from "../ButtonContainer";
import { useFetchMeals } from "../../hooks/useFetchMeals";

function MealPlanner({ onCancel, selectedDate }) {
  const meals = useFetchMeals();
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [activeComponent, setActiveComponent] = useState(null);

  const handleSubmit = async (mealData) => {
    const mealDataWithDate = {
      ...mealData,
      date: selectedDate.toLocaleDateString(),
    };
    const createdMeal = await addMealTemplate(mealDataWithDate);
    setSelectedMeal(createdMeal);
  };

  return !selectedMeal ? (
    <MealSelector
      selectedDate={selectedDate}
      meals={meals}
      setSelectedMeal={setSelectedMeal}
      activeComponent={activeComponent}
      setActiveComponent={setActiveComponent}
      handleSubmit={handleSubmit}
    />
  ) : (
    <Confirmation
      selectedMeal={selectedMeal}
      onCancel={onCancel}
    />
  );
}

const MealSelector = ({
  selectedDate,
  meals,
  setSelectedMeal,
  activeComponent,
  setActiveComponent,
  handleSubmit,
}) => {
  const [showHelpText, setShowHelpText] = useState(false);
  const dateString = getDateString(selectedDate);

  const toggleHelpText = (event) => {
    event.stopPropagation();
    setShowHelpText(!showHelpText);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (showHelpText && !event.target.closest(".modal-content")) {
        setShowHelpText(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showHelpText]);

  if (!selectedDate) {
    return (
      <PageContainer>
        <div>
          <Heading>Please select a date.</Heading>
          <Link to="/">Homepage</Link>
        </div>
      </PageContainer>
    );
  }

  return (
    <>
      <Helper>
        <div className="content" onClick={toggleHelpText}>
          <MdQuestionMark />
        </div>
        {showHelpText && (
          <div className="modal">
            <div className="modal-content">
              <p>Back-end not working</p>
            </div>
          </div>
        )}
      </Helper>
      <PageContainer style={{ paddingTop: "2rem" }}>
        <div>
          <Heading style={{ margin: "0" }}>{dateString}</Heading>
          <SubHeading style={{ margin: "6px 0 24px 0" }}>
            What are we eating today?
          </SubHeading>
        </div>

        <div style={{ display: "flex", minHeight: "55px", marginTop: "2em" }}>
          <ButtonContainer
            activeComponent={activeComponent}
            setActiveComponent={setActiveComponent}
            componentName="CreateMeal"
          >
            <MdAdd style={{ marginRight: "8px" }} />
            Create a new meal
          </ButtonContainer>
          <ButtonContainer
            activeComponent={activeComponent}
            setActiveComponent={setActiveComponent}
            componentName="SelectMeal"
          >
            Choose an existing meal
          </ButtonContainer>
        </div>

        <MealPlannerContainer>
          {activeComponent === "SelectMeal" && selectedDate && (
            <SelectMeal
              meals={meals}
              onSelect={setSelectedMeal}
              selectedDate={selectedDate}
            />
          )}
          {activeComponent === "CreateMeal" && selectedDate && (
            <CreateMeal onSubmit={handleSubmit} selectedDate={selectedDate} />
          )}
        </MealPlannerContainer>
      </PageContainer>
    </>
  );
};

const Confirmation = ({ selectedMeal, onCancel }) => {
  return (
    <div>
      <Heading>
        {selectedMeal.attributes
          ? selectedMeal.attributes.name
          : selectedMeal.name}
      </Heading>
      <SubHeading>Let's get it on</SubHeading>
      <Button>Yes</Button>
      <Button onClick={onCancel}>Previous</Button>
    </div>
  );
};

export default MealPlanner;
