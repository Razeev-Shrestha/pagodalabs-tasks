import { useMemo } from "react";
import { DataType, QueryType } from "../types/types";

export const useOperations = (queries: QueryType, datas: DataType[]) => {
  const results = useMemo(() => {
    if (!queries.search && !queries.sort && !queries.gender) {
      return datas;
    }

    let filteredData = datas.slice();

    if (queries.gender) {
      const genderFilter = queries.gender.toLowerCase();
      filteredData = filteredData.filter(
        (data) => data.gender.toLowerCase() === genderFilter
      );
    }

    /** CASE 'search' */
    if (queries.search) {
      const search = queries.search.toLowerCase();

      const searchResult = filteredData.filter((data) => {
        return (
          data.age.toString().includes(search) ||
          data.dateOfBirth.toLowerCase().includes(search) ||
          data.firstName.toLowerCase().includes(search) ||
          data.gender.toLowerCase().includes(search) ||
          data.lastName.toLowerCase().includes(search) ||
          data.phoneNumber.toLowerCase().includes(search)
        );
      });

      filteredData = searchResult;
    }
    /** CASE 'sort' */

    if (queries.sort) {
      if (queries.sort === "name-asc") {
        return filteredData.sort((a, b) =>
          a.firstName.localeCompare(b.firstName)
        );
      } else if (queries.sort === "name-desc") {
        return filteredData.sort((a, b) =>
          b.firstName.localeCompare(a.firstName)
        );
      } else if (queries.sort === "age-asc") {
        return filteredData.sort((a, b) => a.age - b.age);
      } else if (queries.sort === "age-desc") {
        return filteredData.sort((a, b) => b.age - a.age);
      } else if (queries.sort === "phone-asc") {
        return filteredData.sort((a, b) =>
          a.phoneNumber.localeCompare(b.phoneNumber)
        );
      } else if (queries.sort === "phone-desc") {
        return filteredData.sort((a, b) =>
          b.phoneNumber.localeCompare(a.phoneNumber)
        );
      } else {
        return filteredData;
      }
    }

    return filteredData;
  }, [queries, datas]);

  return results;
};
