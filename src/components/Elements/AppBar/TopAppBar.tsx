import { AppBar, Toolbar, Box, Typography, Link } from "@mui/material";
import Logo from "../../../assets/logo.svg";

export const TopAppBar = () => {
  return (
    <>
      <AppBar
        position="relative"
        sx={{ minWidth: "100%", backgroundColor: "#222222" }}
      >
        <Toolbar>
          <Box display="flex" alignItems="center">
            <Link
              href="https://www.clearblade.com/"
              target="_blank"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                "&:hover .logo-text": {
                  color: "#27ebaf",
                },
              }}
            >
              <img src={Logo} alt="Logo" />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                }}
                className="logo-text"
              >
                CLEAR
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "light",
                  color: "white",
                }}
                className="logo-text"
              >
                BLADE
              </Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
