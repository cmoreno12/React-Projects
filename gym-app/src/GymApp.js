import React from "react";
import { useForm } from "./hooks";
import { GymInputForm } from "./UI/atoms";

export const GymApp = () => {
  const [formValues, handleInputChange] = useForm({ input1: "" });
  const { input1, input2 } = formValues;

  return (
    <div>
      <GymInputForm
        placeholder="Input"
        className="mb-3"
        type="text"
        id="input"
        name="imput1"
        label="Input Atom"
        value={input1}
        handleChange={handleInputChange}
      />
      <GymInputForm
        placeholder="Input2"
        className="mb-3"
        type="text"
        id="input2"
        name="imput2"
        label="Input Atom 2"
        value={input2}
        handleChange={handleInputChange}
      />
    </div>
  );
};
