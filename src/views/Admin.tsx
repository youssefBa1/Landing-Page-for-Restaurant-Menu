import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTable, Column } from 'react-table';

interface MenuItem {
    _id: string;
    dishName: string;
    price: string;
    imageUrl: string;
    __v: number;
}

interface MenuSection {
    _id: string;
    name: string;
    menuItems: MenuItem[];
    __v: number;
}

const AdminDashboard: React.FC = () => {
    const [data, setData] = useState<MenuSection[]>([]);

    useEffect(() => {
        // Fetch data from your backend API
        axios.get<MenuSection[]>('http://localhost:3000/menuSections').then((response) => {
            setData(response.data);
        });
    }, []);

    // Define columns based on your data structure
    const columns = React.useMemo<Column<MenuSection | MenuItem>[]>(
        () => [
            { Header: 'ID', accessor: (d) => d._id },
            { Header: 'Name', accessor: (d) => 'name' in d ? d.name : '' },
            {
                Header: 'Menu Items',
                accessor: (d) => 'menuItems' in d ? d.menuItems : [],
                Cell: ({ value }: { value: MenuItem[] }) => {
                    // Render menu items as a comma-separated list
                    return value.map((item) => item.dishName).join(', ');
                },
            },
            // Add more columns as needed
        ],
        []
    );

    // Use react-table to create the table
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data });

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <table {...getTableProps()} style={{ borderSpacing: '0', width: '100%' }}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()} style={{ borderBottom: 'solid 3px #d4d4d4' }}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()} style={{ padding: '10px', borderBottom: 'solid 1px #d4d4d4' }}>
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;
