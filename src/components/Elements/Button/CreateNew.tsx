import * as React from "react";
import { TodoForm } from "../../Form";
import {
  Button,
  Backdrop,
  Paper,
  Box,
  Tooltip,
  IconButton,
} from "@mui/material/";

export const CreateNew = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleToggle}
        sx={{
          fontWeight: "bold",
          backgroundColor: "#27ebaf",
          color: "black",
          "&:hover": {
            backgroundColor: "#373737",
            color: "#27ebaf",
          },
          clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
          borderRadius: 0,
        }}
      >
        + Create New
      </Button>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <TodoForm handleBackdropClose={handleClose} />
      </Backdrop>
    </div>
  );
};
