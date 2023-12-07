import { useState } from "react";
import { Input } from "./Input";
import { Select } from "./Select";
import { genderOptions, randomData, sortOptions } from "../dummyData";
import { Button } from "./Button";

import "./DataTable.css";
import { Table } from "./Table";
import { useAppContext } from "../context/AppContext";
import { GenderType } from "../types/types";

export const DataTable = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<
    (typeof sortOptions)[number]["value"] | string
  >("");
  const [gender, setGender] = useState<GenderType>("");

  const { setData } = useAppContext();

  const queries = {
    search,
    sort,
    gender,
  };

  return (
    <div className="data-table">
      <Input
        name="search"
        id="search"
        className="search-input"
        placeholder="Search..."
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
          setSort("");
          setGender("");
        }}
      />
      <Select
        name="sort"
        id="sort"
        className="sort-select"
        value={sort}
        onChange={(event) => {
          setSort(event.target.value);
          setGender("");
          setSearch("");
        }}
        options={[
          {
            type: "Select Sorting Method",
            value: "",
          },
          ...sortOptions,
        ]}
      />
      <Select
        name="select-gender"
        id="select-gender"
        className="gender-select"
        value={gender}
        onChange={(event) => {
          setGender(event.target.value);
          setSort("");
          setSearch("");
        }}
        options={[
          {
            type: "Filter By Gender",
            value: "",
          },
          ...genderOptions,
        ]}
      />
      <Button
        className="button-pop"
        onClick={() => {
          //@ts-ignore
          setData(randomData);
        }}
      >
        Populate with 15 random data's
      </Button>
      <Table {...queries} />
    </div>
  );
};
