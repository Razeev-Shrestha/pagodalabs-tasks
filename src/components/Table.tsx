import { QueryType as TableProps } from "../types/types";
import { useAppContext } from "../context/AppContext";
import { useOperations } from "../hooks/useOperations";

export const Table = (queries: TableProps) => {
  const { data } = useAppContext();

  const results = useOperations(queries, data);

  return (
    <>
      <table>
        <thead>
          <tr>
            {dataHeaders.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {results.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.age}</td>
              <td>{data.dateOfBirth}</td>
              <td>{data.phoneNumber}</td>
              <td>{data.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {(queries.search || queries.gender || queries.sort) &&
        results.length === 0 && <p>Sorry,No results found.</p>}
    </>
  );
};

const dataHeaders = [
  "I.D",
  "First Name",
  "Last name",
  "Age",
  "Date Of Birth",
  "Phone Number",
  "Gender",
];
