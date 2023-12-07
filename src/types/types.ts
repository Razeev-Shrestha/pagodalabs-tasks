export type GenderType = "male" | "female" | "other" | string;

export type DataType = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  dateOfBirth: string;
  phoneNumber: string;
  gender: GenderType;
};

export type AppContextType = {
  data: DataType[];
  setData: (data: DataType) => void;
};

export type QueryType = {
  search?: string;
  sort?: string;
  gender?: string;
};
