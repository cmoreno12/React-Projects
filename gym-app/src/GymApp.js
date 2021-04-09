import React from "react";
import { useForm } from "./hooks";
import InputForm from "./UI/molecules/input-form";
import FormRow from './UI/atoms/gym-form-row'

export const GymApp = () => {
  const [formValues, handleInputChange] = useForm({ input1: "", input2: "", input3: "" });
  const { input1, input2, input3 } = formValues;

  return (
    <form>
      <FormRow>
        <InputForm colSize="6" type="text" id="input1" name="input1" handleInputChange={handleInputChange} value={input1} label="Input 1" />
        <InputForm colSize="3" type="text" id="input2" name="input2" handleInputChange={handleInputChange} value={input2} label="Input 2" />
        <InputForm colSize="3" type="text" id="input3" name="input3" handleInputChange={handleInputChange} value={input3} label="Input 3" />
      </FormRow>
      <FormRow>
        <InputForm colSize="4" type="text" id="input1" name="input1" handleInputChange={handleInputChange} value={input1} label="Input 1" />
        <InputForm colSize="5" type="text" id="input2" name="input2" handleInputChange={handleInputChange} value={input2} label="Input 2" />
        <InputForm colSize="3" type="text" id="input3" name="input3" handleInputChange={handleInputChange} value={input3} label="Input 3" />
      </FormRow>
    </form>
  );
};
