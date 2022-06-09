import styled from "styled-components";

export const SectionContent = styled.div`
  margin-top: 20px;
  position: relative;
`;

export const LeftFloatedContainer = styled.div`
  padding-right: 3.5rem;
  width: 50%;
  float: left;
  position: relative;
  padding-left: 0.75rem;
`;

export const RightFloatedContainer = styled.div`
  float: right;
  width: 50%;
`;

export const WrapperQuestion = styled.div``;
export const AnswersWrapper = styled.div``;

export const QuestionTextWrapper = styled.div`
  text-align: left;
`;

export const Subject = styled.div`
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  font-weight: bold;
`;

export const QuestionH1 = styled.h1`
  font-weight: bold;
`;

export const SubmitButton = styled.button`
  padding: 32px 43px 28px 31px;
  border: 2px solid rgba(238, 238, 238, 0.4);
  align-items: center;
  position: relative;
  width: 100%;
  cursor: pointer;
  background-color: transparent;
  color: #000;
  font-size: 1.5rem;
  margin-top: 50px;
  outline: none;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: #ff717b;
    color: #fff;
  }
`;
