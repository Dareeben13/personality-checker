import { useState, useContext } from "react";

import { FormInput, FormLabel, FormRadioWrapper } from "./styles";

interface FormRadioItemProps {
  value: string;
  currentIndex: number;
  index: number;
  setCurrentIndex: (index: number) => void;
  id: string;
  label: string;
  onNext?: () => void;
  name: string;
}

export const FormRadioItem = (props: FormRadioItemProps) => {
  const [checked, setChecked] = useState(false);
  const { currentIndex, index, setCurrentIndex, onNext, label, value, ...rest } = props;
  const onChange = (e: any) => {
    setChecked(e.target.checked);
    setCurrentIndex(index);
    onNext && onNext();
  };

  return (
    <FormRadioWrapper className={`rad-wrap ${checked && currentIndex === index ? "active-rad-wrap" : ""}`} style={{ padding: "32px 43px 28px 31px" }}>
      <FormLabel className="lb" style={{ width: "100%" }}>
        {label}
        <FormInput onChange={(e) => onChange(e)} type="radio" value={value} {...rest} />
        <span className="checkmark mr-3"></span>
      </FormLabel>
    </FormRadioWrapper>
  );
};
