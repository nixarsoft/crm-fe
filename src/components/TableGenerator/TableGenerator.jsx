import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

function TableGenerator({ headers, data }) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        border: "1px solid #aad751",
        backgroundColor: "#aad751",
        maxWidth: "85%",
        margin: "20px auto"
      }}
    >
      <Table
      size="small"
        sx={{
          borderCollapse: "separate",
          borderSpacing: "2px 2px",
        }}
      >
        <TableHead>
          <TableRow
            sx={{
              "th": {
                fontSize: 14,
                fontWeight: "bold",
                color: "#f5f5f5",
                border: "none",
                borderBottom: "px solid #000",
                backgroundColor: "#aad751",
                textAlign: "center"
              },
            }}
          >
            {headers.map((headName, i) => (
              <TableCell key={i}>{headName}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, r) => (
            <TableRow
              key={r}
              sx={{
                "&:nth-of-type(odd)": { backgroundColor: "#fafafa" },
                "&:nth-of-type(even)": { backgroundColor: "#d9f2a4" },
                "td": { textAlign: "center" },
                "&:hover": { backgroundColor: "#c4e693" }
              }}
            >
              {Object.keys(row).map((k, c) => (
                <TableCell
                  key={c}
                  sx={
                    k === "Agent"
                      ? { color: "#2d68c4", fontWeight: "bold" }
                      : {}
                  }
                >
                  {k === "actions" ? (
                    row.actions.map((action, idx) => (
                      <Button
                        size="small"
                        key={idx}
                        onClick={action.onClick}
                        color={action.color}
                        variant="contained"
                        sx={{ mr: 2}}
                      >
                        {action.name}
                      </Button>
                    ))
                  ) : (
                    row[k]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableGenerator;
