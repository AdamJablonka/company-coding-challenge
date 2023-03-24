import { AppBar, CssBaseline, Toolbar, Box, Typography } from "@mui/material";
import Logo from "../../../assets/logo.svg";
import { TodoSearch } from "../../Form";

export const TopAppBar = () => {
  return (
    <>
      <AppBar
        position="relative"
        sx={{ minWidth: "100%", backgroundColor: "#222222" }}
      >
        <Toolbar>
          <Box display="flex" alignItems="center">
            <img src={Logo} alt="Logo" />
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              CLEAR
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "light", color: "white" }}
            >
              BLADE
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
