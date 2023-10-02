import React, { FormEvent, useState } from "react";
import Button from "../Button/Button";
import "./input.css";

interface Props {
  onFormSubmit: (value: string) => void;
}

const Input: React.FC<Props> = ({ onFormSubmit }) => {
  const [value, setValue] = useState("");

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    onFormSubmit(value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div className="input-wrapper">
      <form
        onSubmit={handleFormSubmit}
        className="form-inline centered-container"
      >
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          className="form-control mb-2 mr-sm-2"
          placeholder="Enter the fingerprint numbers here"
        />
        <Button onClick={handleFormSubmit} className="submit-button">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Input;
