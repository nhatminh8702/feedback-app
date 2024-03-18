import React, { useMemo, useState } from "react";
import "./UserManagement.css";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  IconButton,
  InputBase,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import AccountManagementModal from "../../Components/AccountManagementModal/AccountManagementModal";
import EditNoteIcon from "@mui/icons-material/EditNote";
const userData = [
  {
    id: 1,
    fullName: "Dang Nhat Minh",
    password: "123",
    email: "minhhe@fpt.edu.vn",
    role: "student",
  },
  {
    id: 2,
    fullName: "Hoang Thanh Phong",
    password: "123",
    email: "phongfe@fpt.edu.vn",
    role: "teacher",
  },
  {
    id: 3,
    fullName: "Nguyen Trung Vu",
    password: "123",
    email: "vuhe@fpt.edu.vn",
    role: "student",
  },
  {
    id: 4,
    fullName: "Trieu Dinh Chien",
    password: "123",
    email: "chienfe@fpt.edu.vn",
    role: "teacher",
  },
  {
    id: 5,
    fullName: "Nguyen Nhat Nam",
    password: "123",
    email: "namhe@fpt.edu.vn",
    role: "student",
  },
];

const UserManagement = () => {
  const [requestData, setRequestData] = useState(userData);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedAccount, setSelectedAccount] = useState();

  const tableData = useMemo(() => {
    return requestData.filter((item) =>
      item.fullName.toLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }, [requestData, searchValue]);

  const handleCloseModal = (modal) => {
    if (modal === "add") {
      setOpenAddModal((current) => !current);
    }
    if (modal === "update") {
      setOpenUpdateModal((current) => !current);
    }
  };

  const handleClickAddButton = () => {
    setOpenAddModal(true);
  };

  const handleClickUpdateButton = (id) => {
    let account = requestData.find((item) => item.id === id);
    setSelectedAccount(account);
    setOpenUpdateModal(true);
  };

  const handleClickDeleteButton = (id) => {};

  const handleSearchBarChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleAddAccount = (data) => {
    console.log(data);
  };

  const handleUpdateAccount = (data) => {
    console.log(data);
  };

  return (
    <div className="account-container">
      <TableContainer component={Paper} sx={{ margin: 1 }}>
        <Box sx={{ margin: 1, display: "flex", gap: 1 }}>
          <Box
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              width: 400,
              border: "1px solid gray",
              borderRadius: 2,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="search for account name"
              value={searchValue}
              onChange={handleSearchBarChange}
            />
            <IconButton type="button" sx={{ p: "8px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Box>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={handleClickAddButton}
          >
            Add Account
          </Button>
        </Box>
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#e5e7eb" }}>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Password</TableCell>
              <TableCell>Position</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.fullName}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.email}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.password}
                </TableCell>
                <TableCell component="th" scope="row">
                  <Box
                    sx={{
                      backgroundColor:
                        row.role === "teacher" ? "#e5e7eb" : "#1976d2",
                      textAlign: "center",
                      p: 1,
                      borderRadius: 100,
                      //width: "100px",
                      color: row.role === "teacher" ? "black" : "white",
                    }}
                  >
                    {row.role}
                  </Box>
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  <Button
                    variant="contained"
                    startIcon={<EditNoteIcon />}
                    onClick={() => handleClickUpdateButton(row.id)}
                  >
                    Update
                  </Button>
                  <Button
                    sx={{ m: 1 }}
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleClickDeleteButton(row.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AccountManagementModal
        title={"Create Account"}
        open={openAddModal}
        onClose={() => handleCloseModal("add")}
        onSubmit={handleAddAccount}
      />
      <AccountManagementModal
        title={"Update Account"}
        open={openUpdateModal}
        onClose={() => handleCloseModal("update")}
        onSubmit={handleUpdateAccount}
        value={selectedAccount}
      />
    </div>
  );
};

export default UserManagement;
