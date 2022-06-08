import React from "react";

import { Content, HomeHeadText, IntroP, SectionWrapper, SliderDownContainer, TakeQuizText, VerticalAlignContent, VerticalContainer, VerticalLineContainer } from "./styles";

interface IntroProps {
  onClick: () => void;
}

function IntroSection({ onClick }: IntroProps) {
  return (
    <SectionWrapper className="section-wrapper" id="intro">
      <VerticalLineContainer className="no-mobile" />
      <VerticalContainer>
        <VerticalAlignContent>
          <Content>
            <HomeHeadText className="intro-H1">Personality Checker</HomeHeadText>
            <IntroP className="intro-p">Are you an Introvert or an Extrovert? Take our test to find out your Personality.</IntroP>
            <TakeQuizText>Take the test!</TakeQuizText>
            <SliderDownContainer className="c-pointer" onClick={() => onClick()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="14" viewBox="0 0 21 14">
                <path fill="#B4A76C" fillRule="nonzero" d="M10.5 14L0 3.587 3.615 0 10.5 6.829 17.385 0 21 3.586z"></path>
              </svg>
            </SliderDownContainer>
          </Content>
        </VerticalAlignContent>
      </VerticalContainer>
    </SectionWrapper>
  );
}

export { IntroSection };
