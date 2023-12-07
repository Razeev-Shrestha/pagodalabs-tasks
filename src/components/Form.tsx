import { useState } from "react";
import { DataType } from "../types/types";
import { Input } from "./Input";
import { Select } from "./Select";
import { genderOptions } from "../dummyData";
import { Button } from "./Button";

import "./Form.css";
import { useAppContext } from "../context/AppContext";

type FormState = Omit<DataType, "id">;

const formInitialValues: FormState = {
  age: 0,
  dateOfBirth: "",
  firstName: "",
  gender: "",
  lastName: "",
  phoneNumber: "",
};

export const Form = () => {
  const [formValues, setFormValues] = useState<FormState>(formInitialValues);
  const { setData } = useAppContext();

  const handleInputChange = (event: any) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setData({
      ...formValues,
      id: Math.floor(Math.random() * 1000),
    });
    setFormValues(formInitialValues);
  };

  const handleFormReset = () => {
    setFormValues(formInitialValues);
  };

  return (
    <form className="form-container" onSubmit={handleFormSubmit}>
      <Input
        type="text"
        name="firstName"
        id="firstName"
        label="First Name"
        placeholder="Enter first name"
        required
        value={formValues.firstName}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        name="lastName"
        id="lastName"
        label="Last Name"
        required
        placeholder="Enter last name"
        value={formValues.lastName}
        onChange={handleInputChange}
      />
      <Input<number>
        type="number"
        name="age"
        id="age"
        label="Age"
        placeholder="Enter age"
        required
        value={formValues.age}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        name="dateOfBirth"
        id="dateOfBirth"
        label="Date Of Birth"
        placeholder="yyyy-MM-dd"
        required
        value={formValues.dateOfBirth}
        onChange={handleInputChange}
      />
      <Input
        type="number"
        name="phoneNumber"
        id="phoneNumber"
        label="Phone Number"
        placeholder="Enter phone number"
        required
        value={formValues.phoneNumber}
        onChange={handleInputChange}
      />
      <Select
        name="gender"
        id="gender"
        className="gender-input"
        required
        value={formValues.gender}
        onChange={handleInputChange}
        options={[
          {
            type: "Select Gender",
            value: "",
          },
          ...genderOptions,
        ]}
      />
      <Button type="submit" className="submit-btn">
        Submit
      </Button>
      <Button type="reset" className="submit-btn" onClick={handleFormReset}>
        Reset
      </Button>
    </form>
  );
};
