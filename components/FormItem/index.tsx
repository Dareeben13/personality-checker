import React, { useState, useContext, useEffect } from "react";
import { OptionsType, useQuestionContext } from "../../context";

import { FormInput, FormLabel, FormRadioWrapper } from "./styles";

interface FormRadioItemProps {
  value: string;
  currentIndex: number;
  index: number;
  setCurrentIndex: (index: number) => void;
  label: OptionsType;
  onNext?: () => void;
  name: string;
  setCurrentAnswer: (answer: any) => void;
}
//@ts-ignore
export const FormRadioItem = (props: FormRadioItemProps) => {
  const [checked, setChecked] = useState(false);
  const { currentIndex, index, setCurrentIndex, onNext, label, value, setCurrentAnswer, ...rest } = props;

  const onChange = (e: any) => {
    setChecked(e.target.checked);
    setCurrentIndex(index);
    setCurrentAnswer!(label);
    onNext && onNext();
  };

  return (
    <FormRadioWrapper className={`rad-wrap ${checked && currentIndex === index ? "active-rad-wrap" : ""}`} style={{ padding: "32px 43px 28px 31px" }}>
      <FormLabel className="lb" style={{ width: "100%" }}>
        {label["text"]}
        <FormInput onChange={(e) => onChange(e)} type="radio" value={value} {...rest} />
        <span className="checkmark mr-3"></span>
      </FormLabel>
    </FormRadioWrapper>
  );
};
