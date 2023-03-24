import * as React from "react";
import { TextField, Tooltip, IconButton, Box, Fab, Paper } from "@mui/material";
import { useTodoStore } from "../../stores/useTodoStore";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { TodoFormProps } from "../../types";
import { ConfirmationSnackbar } from "../Elements/ConfirmationSnackbar/ConfirmationSnackbar";

export const TodoForm = ({ handleBackdropClose }: TodoFormProps) => {
  const createTodo = useTodoStore((state) => state.createTodo);
  const [title, setTitle] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const addTodo = () => {
    if (title.trim()) {
      createTodo({ id: Date.now(), title, completed: false });
      setTitle("");
      setOpen(true);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      gap={2}
      margin="0.5rem"
      justifyContent="center"
      alignItems="center"
    >
      <ConfirmationSnackbar open={open} handleClose={handleClose} />
      <Paper
        elevation={3}
        sx={{
          borderRadius: "1rem",
          padding: "6rem",
          border: "none",
          position: "relative",
        }}
      >
        <Tooltip title="Close">
          <IconButton
            aria-label="close"
            onClick={handleBackdropClose}
            sx={{
              position: "absolute",
              right: "0.5rem",
              top: "0.5rem",
              padding: "0.5rem",
              marginLeft: "1rem",
            }}
          >
            <CloseIcon />
          </IconButton>
        </Tooltip>

        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label="New Todo"
          variant="outlined"
          sx={{ flexGrow: 1, marginRight: "1rem" }}
        />
        <Fab color="primary" aria-label="add" onClick={addTodo}>
          <AddIcon />
        </Fab>
      </Paper>
    </Box>
  );
};
