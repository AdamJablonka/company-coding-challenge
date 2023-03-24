import * as React from "react";
import { useState } from "react";
import {
  TextField,
  Tooltip,
  IconButton,
  Box,
  Fab,
  Snackbar,
  Paper,
} from "@mui/material";
import { useTodoStore } from "../../stores/useTodoStore";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { TodoFormProps } from "../../types";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const TodoForm = ({ handleBackdropClose }: TodoFormProps) => {
  const createTodo = useTodoStore((state) => state.createTodo);
  const clearTodos = useTodoStore((state) => state.clearTodos);
  const [title, setTitle] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

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
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Todo Created!
        </Alert>
      </Snackbar>
      <Paper
        elevation={3}
        sx={{
          borderRadius: "0.25rem",
          padding: "2rem",
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
