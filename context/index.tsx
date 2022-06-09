import React, { createContext, useState, useContext } from "react";
import { useSyncState } from "../hooks";

interface ProviderProps {
  children: React.ReactNode;
}

export const QuestionContext = createContext<any>(null);

export const useQuestionContext = () => useContext(QuestionContext);

export type OptionsType = {
  text: string;
  tag: string;
};

export interface MappedQuestions {
  question: string;
  options: OptionsType[];
}

export const QuestionProivder = ({ children }: ProviderProps) => {
  const [currentSection, setCurrentSection] = useState("intro");
  const [questionMap, setQuestionMap] = useState<MappedQuestions[] | any>({});
  const feedback = useSyncState({});
  const Ids: string[] = ["intro", "question1", "question2", "question3", "question4", "question5"];
  const lastId = Ids[Ids.length - 1];

  const scroll = (id: string) => {
    const section = document.querySelector(`#${id}`);
    if (section) {
      section!.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        setCurrentSection(id);
      }, 300);
    }
  };

  const onNext = () => {
    //   If current section is intro, scroll to questionOne
    const index = Ids.indexOf(currentSection);
    if (index < Ids.length - 1) {
      scroll(Ids[index + 1]);
      setCurrentSection(Ids[index + 1]);
    }
  };

  const onPrev = () => {
    const index = Ids.indexOf(currentSection);
    if (index > 0) {
      scroll(Ids[index - 1]);
      setCurrentSection(Ids[index - 1]);
    }
  };

  return (
    <QuestionContext.Provider
      value={{
        currentSection,
        setCurrentSection,
        scroll,
        onNext,
        onPrev,
        lastId,
        Ids,
        setQuestionMap,
        questionMap,
        feedback,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
