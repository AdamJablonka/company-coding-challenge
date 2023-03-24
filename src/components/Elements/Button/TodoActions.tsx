import { IconButton, Tooltip, Box, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { TodoActionsProps } from "../../../types";

export const TodoActions = ({
  setIsEditing,
  handleDelete,
  setCompleted,
  completed,
}: TodoActionsProps) => {
  return (
    <Box display="flex">
      <Tooltip title="Edit">
        <IconButton onClick={() => setIsEditing(true)}>
          <EditIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Checkbox
        checked={completed}
        onChange={() => setCompleted(!completed)}
        inputProps={{ "aria-label": "controlled" }}
      />
    </Box>
  );
};
