import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Logo from "../../../assets/adminLogo.svg";
import {ThemeProvider, Typography} from "@mui/material";
import {createTheme} from "@mui/material";
import {useNavigate} from "react-router-dom";


function AdminLogin() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
    const theme = createTheme();
    const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth={false}
        disableGutters
        sx={{ bgcolor: "#0E1216", height: "100vh", overflow: "hidden" }}
      >
        <CssBaseline />
          <div
              style={{
                  height: "180px",
                  width: "180px",
                  position: "absolute",
                  borderRadius: "50%",
                  background: "linear-gradient(#1845ad,#23a2f6)",
                  left: "27%",
                  top: "1%",
              }}
          ></div>
          <div
              style={{
                  height: "180px",
                  width: "180px",
                  position: "absolute",
                  borderRadius: "50%",
                  background:
                      "linear-gradient(180deg, rgba(85,239,54,1) 0%, rgba(1,166,85,1) 100%)",
                  right: "29%",
                  bottom: "1%",
              }}
          ></div>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "80%",
            width: "30%",
            bgcolor: " rgba(255,255,255,0.13)",
              position: "absolute",
              top: "3%",
              left: "34%",
            borderRadius: "10px",
            backdropFilter: "blur(10px)",
            border: "2px solid rgba(255,255,255,0.1)",
            boxShadow: "0 0 40px rgba(8,7,16,0.6)",
              padding: "40px 35px",
          }}
        >
            <Box src={Logo} component="img" alt="Logo" sx={{height : '120px' , mb : "10px"}} />
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField

              margin="normal"
              required
              fullWidth
              id="AdminUserName"
              label="User Name"
              name="Admin User Name"
              autoComplete="email"
              autoFocus
              sx={{ input: { color: "white" }, "label": {color: "white"} }}


            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{ input: { color: "white" }, "label": {color: "white"} }}
            />
              <FormControlLabel
                  control={<Checkbox value="remember" sx={{color: "white"}} />}
                  label={<Typography variant={"subtitle1"} sx = {{color : "white"}}>Remember me</Typography>}
              />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => navigate("/adminPanel")}
            >
              Sign In
            </Button>

            <Grid container>
              <Grid item xs>
                  <Button variant="text" onClick={() => navigate("/")}>Back To Site</Button>
              </Grid>
              <Grid item>

              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export { AdminLogin };
