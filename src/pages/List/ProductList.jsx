import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Edit } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

import { productRows } from "../../dummyData";

import React from 'react';

import './productList.css';

export default function ProductList() {
    const [data, setData] = useState(productRows);
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "name",
            headerName: "Name",
            width: 350,
        },
        {
            field: "image",
            headerName: "Image",
            renderCell: (data) => {
                return <img className="tableUser-img" src={data.row.image} alt="" />;
            },
            width: 200,
        },
        {
            field: "stock",
            headerName: "Stock",
            width: 250,
        },
        {
            field: "status",
            headerName: "Status",
            width: 200,
        },
        {
            field: "price",
            headerName: "Price",
            width: 200,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <Edit className="tableAction-edit" />
                        </Link>
                        <DeleteOutline
                            className="tableAction-del"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];
    return (        
        <div className="product-list">
            <Link to="/newProduct">
                <button className="create-product">Create product</button>
            </Link>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={9}
                // checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}
