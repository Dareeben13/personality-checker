import React from "react";
import styled from "styled-components";
import { useQuestionContext } from "../../context";
import { TwoSliderDownContainer } from "./styles";

export const SlideWrapper = () => {
  const { currentSection, onPrev, onNext, lastId } = useQuestionContext();

  return (
    <React.Fragment>
      <TwoSliderDownContainer
        onClick={onPrev}
        className="no-mobile"
        style={{
          display: currentSection !== "intro" ? "flex" : "none",
          top: "40px",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="14" viewBox="0 0 21 14">
          <path fill="#B4A76C" fillRule="nonzero" d="M10.5 0L21 10.413 17.385 14 10.5 7.171 3.615 14 0 10.414z"></path>
        </svg>
      </TwoSliderDownContainer>
      <TwoSliderDownContainer
        onClick={onNext}
        className="no-mobile"
        style={{
          display: currentSection !== "intro" && currentSection !== lastId ? "flex" : "none",
          bottom: "40px",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="14" viewBox="0 0 21 14">
          <path fill="#B4A76C" fillRule="nonzero" d="M10.5 14L0 3.587 3.615 0 10.5 6.829 17.385 0 21 3.586z"></path>
        </svg>
      </TwoSliderDownContainer>
    </React.Fragment>
  );
};
