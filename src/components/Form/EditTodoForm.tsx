import React from "react";
import { EditFormProps } from "../../types";
import { TextField, Tooltip, IconButton } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

export const EditTodoForm = ({
  title,
  setTitle,
  handleSave,
}: EditFormProps) => {
  return (
    <>
      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        label="Edit Todo"
        variant="outlined"
        sx={{ width: "75%" }}
      />
      <Tooltip title="Save">
        <IconButton onClick={handleSave}>
          <SaveIcon />
        </IconButton>
      </Tooltip>
    </>
  );
};
