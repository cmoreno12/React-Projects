import React from "react";
import { useForm } from "./hooks";
import Button from "./UI/atoms/gym-button";
import Input from "./UI/atoms/gym-input";

export const GymApp = () => {
  const [formValues, handleInputChange] = useForm({ input1: "" });
  const { input1 } = formValues;

  return (
    <div>
      <Button type="primary" size="small">asd</Button>
      <Button type="danger" size="large" disabled={true} >asd</Button>
      <Button type="danger" size="large"  >asd</Button>
      <Input type="text" id="input1" name="input1" handleInputChange={handleInputChange} value={input1} />
    </div>
  );
};
