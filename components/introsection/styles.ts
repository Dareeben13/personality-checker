import styled from "styled-components";

export const Content = styled.div`
  align-items: center;
  justify-content: center;
  height: fit-content;
  position: relative;
  display: flex;
  flex-direction: column;
  vertical-align: middle;
  background-color: #fff;
`;

export const SectionWrapper = styled.section`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 555px;
  height: 100vh;
  position: relative;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const VerticalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: table;
  position: relative;
`;

export const ResponsiveImage = styled.div`
  width: 100%;
  height: auto;
  vertical-align: middle;
`;

export const VerticalAlignContent = styled.div`
  display: table-cell;
  vertical-align: middle;
  position: relative;
  text-align: center;
`;

export const HomeHeadText = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  letter-spacing: -1px;
  line-height: 1;
  margin-bottom: 1.5rem;
  margin-top: 45px;
  font-weight: bold;
  color: #000;
`;

export const IntroP = styled.p`
  font-size: 1.5rem;
  letter-spacing: normal;
  line-height: 1.5;
  font-size: 15px;
  margin-bottom: 50px;
  max-width: 300px;
`;

export const TakeQuizText = styled.p`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 1.42;
  letter-spacing: 0.1em;
  color: #ff5a5f;
  font-size: 14px;
  margin-bottom: 15px;
`;

export const SliderDownContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 2rem;
  height: 2rem;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  border: 1px solid #e4e4e4;
`;

export const VerticalLineContainer = styled.div`
  position: absolute;
  bottom: 0;
  background: #e4e4e4;
  width: 1px;
  height: 50%;
  left: 50%;
`;
