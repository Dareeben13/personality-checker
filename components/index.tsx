import { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useQuestionContext } from "../context";
import { fetchQuestions } from "../pages/api/hello";
import { IntroSection } from "./IntroSection";
import styled from "styled-components";
import { QuestionsWrapper } from "./QuestionsWrapper";
import { SlideWrapper } from "./Slider";

export const ComponentWrapper = () => {
  const { setQuestionMap, scroll, setCurrentSection } = useQuestionContext();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await fetchQuestions();
        setQuestionMap(data);
      } catch (error) {}
    })();
    scroll("intro");
    setCurrentSection("intro");
  }, []);

  return (
    <Fragment>
      <IntroSection onClick={() => scroll("question1")} />
      <SlideWrapper />
      <QuestionsWrapper />
    </Fragment>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
