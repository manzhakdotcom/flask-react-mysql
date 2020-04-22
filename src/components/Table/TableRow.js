import React from 'react';

const TableRow = (props) => (
    <tr key={props.id}>
        <td>{props.id + 1}</td>
        <td
            onClick={() => props.goToTableData(props.table.table_name, props.type)}
        >{props.table.table_name}</td>
        <td>{props.table.table_rows}</td>

    </tr>
);

export default TableRow;