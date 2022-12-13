import React from "react";
import adminImg from "../../../assets/login admin.webp";
import { Box, TextField } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";

function AdminLogin() {
  return (
    <>
      <Box sx={{ display: "flex", m: "0" }}>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <img src={adminImg} alt={"adminLogin"} style={{ width: "70%" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "70%",
            height: "100vh",
            alignItems: "center",
            mr: "50px",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "flex-end", width: "400px" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Admin userName"
              variant="standard"
              fullWidth
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end", width: "400px" }}>
            <KeyIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Password"
              variant="standard"
              fullWidth
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export { AdminLogin };
