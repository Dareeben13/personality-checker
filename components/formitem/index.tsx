import { useState, useContext } from "react";

import { FormInput, FormLabel, FormRadioWrapper } from "./styles";

export const FormRadioItem = () => {
  const [checked, setChecked] = useState(false);
  //   const { currentIndex, index, setCurrentIndex, onNext, formik, ...rest } = props;
  const onChange = (e: any) => {
    // setChecked(e.target.checked);
    // setCurrentIndex(index);
    // onNext && onNext();
  };

  //   ${checked && currentIndex === index ? "active-rad-wrap" : ""}

  return (
    <FormRadioWrapper className={`rad-wrap`} style={{ padding: "28px 43px 28px 31px" }}>
      <FormLabel className="lb" style={{ fontSize: "16px" }}>
        Something Nice
        <FormInput onChange={(e) => onChange(e)} type="radio" value={"Who cares, as long as it's comfortable."} />
        <span className="checkmark mr-3"></span>
      </FormLabel>
    </FormRadioWrapper>
  );
};
