import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { IntroP, SectionWrapper } from "../components/IntroSection/styles";
import { SubmitButton } from "../components/QuestionItem/styles";
import { useQuestionContext } from "../context";

const INTROVERT_OBJECT_DATA = {
  HEADER_TEXT: "You are more of a public introvert and private extrovert",
  BODY_TEXT:
    "Within your circle of family and friends, you are completely at ease and it’s often you who takes the lead to organise outings, dinners, vacations, etc. However, as soon as you are in public or professional setting you become rather inhibited. You don’t feel in tune with what you would qualify as agitation, rivalry or vainglory and this can sometimes appear to others as a kind of hidden criticism or a lack of ambition.",
};

const EXTROVERT_OBJECT_DATA = {
  HEADER_TEXT: "You are more of an extrovert than an introvert",
  BODY_TEXT:
    "In public and at work you are a ball of energy perpetually on the move. You take the initiative, encourage others, hate waiting and are endlessly anticipating what’s going on around you. You take real pleasure in managing everything, much like the conductor of an orchestra.",
};

const PredictionPage = () => {
  const router = useRouter();
  const { feedback } = useQuestionContext();
  const answerData = Object.keys(feedback.get()).map((item) => feedback.get()[item]);
  const numberOfIntro = answerData.filter((item) => item === "intro").length;
  const numberOfExtro = answerData.filter((item) => item === "extro").length;
  const [DATA, setDATA] = useState<any>({});

  const onClick = () => {
    feedback.set({});
    router.push("/");
  };

  useEffect(() => {
    if (numberOfIntro > numberOfExtro) {
      setDATA(INTROVERT_OBJECT_DATA);
    } else {
      setDATA(EXTROVERT_OBJECT_DATA);
    }
  }, []);

  return (
    <SectionWrapper className="section-wrapper" style={{ maxWidth: "1144px" }}>
      <Container>
        <IntroP style={{ fontSize: "2em", fontStyle: "italic" }}>Your Results</IntroP>
        <IntroP className="animated-p" style={{ fontSize: "1em", fontStyle: "italic" }}>
          {DATA["HEADER_TEXT"]}
        </IntroP>
        <DottedBorder>
          <IntroP style={{ maxWidth: "500px", margin: "0" }}>{DATA["BODY_TEXT"]}</IntroP>
        </DottedBorder>
        <SubmitButton style={{ maxWidth: "500px" }} onClick={() => onClick()}>
          Retake Test
        </SubmitButton>
      </Container>
    </SectionWrapper>
  );
};

export default PredictionPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 60px;
  text-align: center;

  & > .animated-p {
    animation: fade-in 1.5s ease-in-out;
  }
`;

const DottedBorder = styled.div`
  border: 2px dotted #ff717b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  & > p {
    animation: fade-in 1.5s ease-in-out;
  }
`;
