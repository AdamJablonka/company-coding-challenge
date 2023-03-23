import { IconButton, Tooltip, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FlakyIcon from "@mui/icons-material/Flaky";

interface TodoActionsProps {
  setIsEditing: (editing: boolean) => void;
  handleDelete: () => void;
  setCompleted: (completed: boolean) => void;
  completed: boolean;
}

export const TodoActions = ({ setIsEditing, handleDelete, setCompleted, completed }: TodoActionsProps) => {
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
      <Tooltip title="Toggle Completion">
        <IconButton onClick={() => setCompleted(!completed)}>
          <FlakyIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
