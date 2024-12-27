import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

function TableGenerator({ headers, data }) {

    /*
    headers prop'u tablo başlıklarını kullanmak için array alır.
    data prop'u tablo verilerini kullanmak için array alır. Key'ler tablo satırlarını temsil eder. Eğer "actions" key'i verilirse her satırın sonuna bir buton eklenir.
    Button verilise renkleri success,error,warning,info,primary,secondary olarak değiştirilebilir.(Material UI default renkleri kullanır)
    örnek kullanım arrays aps.jsx dosyasında verilmiştir.
     */
    return (
        <TableContainer component={Paper}>
            <Table>

                <TableHead>
                    <TableRow sx={{
                        "th": {
                            fontSize: 14,
                            fontWeight: "bold",
                            color: "#fff",
                            border: "none",
                            borderBottom: "2px solid",
                            backgroundColor: "#0d6efd",
                            textAlign: "center"
                        },
                    }}>
                        {headers.map((headName, index) => (
                            <TableCell key={index}>
                                {headName}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, rowIndex) => (
                        <TableRow
                            key={rowIndex}
                            sx={{
                                "&:nth-of-type(even)": { backgroundColor: "#ddd" },
                                "td": { textAlign: "center" },
                                "&:hover": { backgroundColor: '#a5c9fe' }
                            }}
                        >
                            {Object.keys(row).map((key, cellIndex) => (
                                <TableCell key={cellIndex}>
                                    {key === "actions" ? (
                                        row.actions.map((action, index) => (
                                            <Button
                                                key={index}
                                                onClick={action.onClick}
                                                color={action.color}
                                                variant="contained"
                                                sx={{
                                                    "margin": "0 2px",
                                                }}
                                            >
                                                {action.name}
                                            </Button>
                                        ))
                                    ) : (
                                        row[key]
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableGenerator