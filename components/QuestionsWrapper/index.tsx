import React, { useState, useEffect, Fragment } from "react";
import { MappedQuestions, useQuestionContext } from "../../context";
import { QuestionItem } from "../QuestionItem";

export const QuestionsWrapper = () => {
  const { questionMap, feedback } = useQuestionContext();
  return (
    <Fragment>
      {questionMap?.length > 0 &&
        questionMap.map(({ options, question }: MappedQuestions, index: number) => {
          return <QuestionItem key={index} index={index} options={options} question={question} />;
        })}
    </Fragment>
  );
};
