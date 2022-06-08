import Image from "next/image";
import flightDresss from "../../assets/flight-dress.png";
import discuss from "../../assets/discuss.png";
import dinner from "../../assets/dinner.png";
import sitting from "../../assets/sitting.png";
import tour from "../../assets/tour.png";
import { ResponsiveImage, SectionWrapper, VerticalAlignContent, VerticalContainer, VerticalLineContainer } from "../IntroSection/styles";
import React, { useState, useEffect } from "react";
import { FormRadioItem } from "../FormItem";
import { AnswersWrapper, LeftFloatedContainer, RightFloatedContainer, SectionContent, QuestionTextWrapper, WrapperQuestion, Subject, QuestionH1, SubmitButton } from "./styles";
import { MappedQuestions, useQuestionContext } from "../../context";

const IMAGE_LIST = [tour, discuss, sitting, flightDresss, dinner];

interface questionItemProp extends MappedQuestions {
  index: number;
}

export const QuestionItem = React.memo(({ options, question, index }: questionItemProp) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState<any>({});
  const { onNext, questionMap, feedback, currentSection, lastId } = useQuestionContext();

  useEffect(() => {
    if (currentAnswer?.tag) {
      feedback.set({
        ...feedback.get(),
        [`question${index! + 1}`]: currentAnswer["tag"],
      });
    }
  }, [currentAnswer]);

  return (
    <SectionWrapper className="section-wrapper rtq" id={`question${index + 1}`} style={{ maxWidth: "1144px" }}>
      <VerticalLineContainer className="no-mobile" style={{ bottom: "0", background: "#e4e4e4", width: "1px", height: "100%", left: "50%" }} />
      <VerticalContainer>
        <VerticalAlignContent>
          <SectionContent className="sec-content">
            <LeftQuestions questionIndex={index + 1} image={IMAGE_LIST[index]} question={question} total={questionMap?.length} />
            <RightFloatedContainer className="right-floated" style={{ paddingLeft: "57px" }}>
              <AnswersWrapper className="ans-wrap" style={{ paddingTop: "20px" }}>
                {options.map((option, index) => (
                  <FormRadioItem
                    value={option["text"]}
                    currentIndex={currentIndex}
                    index={index}
                    setCurrentIndex={setCurrentIndex}
                    key={index}
                    name={question}
                    label={option}
                    onNext={() => onNext()}
                    setCurrentAnswer={setCurrentAnswer}
                  />
                ))}
                {currentSection === lastId && feedback.get()[lastId] && Object.keys(feedback.get()).length === 5 && <SubmitButton>Submit</SubmitButton>}
              </AnswersWrapper>
            </RightFloatedContainer>
          </SectionContent>
        </VerticalAlignContent>
      </VerticalContainer>
    </SectionWrapper>
  );
});

interface LeftQuestionsProps {
  questionIndex: number;
  image: any;
  question: string;
  total: number;
}

export const LeftQuestions = ({ question, image, questionIndex, total }: LeftQuestionsProps) => (
  <LeftFloatedContainer className="left-floated">
    <WrapperQuestion>
      <QuestionTextWrapper>
        <Subject style={{ color: "#ff5a5f", letterSpacing: ".2em", fontSize: "11px", lineHeight: "1.42" }}>
          Question {questionIndex}/{total}
        </Subject>
        <QuestionH1 className="q-h1" style={{ letterSpacing: "-1px", lineHeight: "1.13", marginBottom: "15px", fontSize: "28px" }}>
          {question}
        </QuestionH1>
      </QuestionTextWrapper>
      <ResponsiveImage>
        <Image priority src={image} alt="Flight Dress" />
      </ResponsiveImage>
    </WrapperQuestion>
  </LeftFloatedContainer>
);
