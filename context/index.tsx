import React, { createContext, useState, useContext } from "react";

interface ProviderProps {
  children: React.ReactNode;
}

export const QuestionContext = createContext<any>(null);

export const useQuestionContext = () => useContext(QuestionContext);

export interface MappedQuestions {
  question: string;
  options: string[];
}

export const QuestionProivder = ({ children }: ProviderProps) => {
  const [currentSection, setCurrentSection] = useState("questionOne");
  const [questionMap, setQuestionMap] = useState<MappedQuestions[] | null>(null);
  const Ids: string[] = ["questionOne"];
  const lastId = Ids[Ids.length - 1];
  //  "intro", "questionTwo", "questionThree", "questionFour", "questionFive"

  const scroll = (id: string) => {
    const section = document.querySelector(`#${id}`);
    console.log({ section });
    section!.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      setCurrentSection(id);
    }, 300);
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
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
