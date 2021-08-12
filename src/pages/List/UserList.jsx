import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Edit } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

import { userRows } from "../../dummyData";

import "./userList.css";

export default function UserList() {
  const [data, setData] = useState(userRows);
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
      field: "avatar",
      headerName: "Avatar",
      renderCell: (data) => {
        return <img className="tableUser-img" src={data.row.avatar} alt="" />;
      },
      width: 200,
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
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
    <div className="userList">
      <Link to="/newUser">
                <button className="create-user">Create User</button>
            </Link>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={9}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
