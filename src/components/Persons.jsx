import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useQuery, gql } from "@apollo/client";
import { Box } from "@mui/material";

export default function Persons() {
  const FEED_QUERY = gql`
    {
      persons {
        id
        lastName
        firstName
        surname
        positionId {
          position
        }
        dateBirthday
        address
        tlf
        tlf2
        out
      }
    }
  `;
  const { data } = useQuery(FEED_QUERY);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>Прізвище, ініціали</TableCell>
            <TableCell>Посада</TableCell>
            <TableCell align="center">Дата народження</TableCell>
            <TableCell align="center">Адреса</TableCell>
            <TableCell align="center">Телефони</TableCell>
            <TableCell align="center">Примітка</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.persons.map((row, idx) => (
              <TableRow
                key={row.id}
                onClick={() => {
                  console.log("log", row.id);
                }}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  cursor: "pointer",
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ width: 5 }}
                >
                  {idx + 1}
                </TableCell>
                <TableCell sx={{ width: 220 }}>
                  {`${row.lastName} ${row.firstName[0]}.${row.surname[0]}.`}
                </TableCell>
                <TableCell sx={{ width: 220 }}>
                  {row.positionId.position}
                </TableCell>
                <TableCell sx={{ width: 170 }} align="center">
                  {new Date(+row.dateBirthday)
                    .toLocaleString()
                    .slice(0, 10)}
                </TableCell>
                <TableCell align="center" sx={{ width: 300 }}>
                  {row.address}
                </TableCell>
                <TableCell align="center" sx={{ width: 170 }}>
                  {row.tlf} <Box>{row.tlf2}</Box>
                </TableCell>
                <TableCell align="center" sx={{ width: 170 }}>
                  {row.out}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
