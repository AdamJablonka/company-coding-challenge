import { useState, useEffect } from "react";
import { TodoItemProps } from "../../../types/index";
import { Box, Typography } from "@mui/material";
import { TodoActions } from "../Button/TodoActions";
import { EditTodoForm } from "../../Form/EditTodoForm";

export const TodoItem = ({
  todo,
  onUpdateTodo,
  onDeleteTodo,
  onToggleComplete,
}: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [completed, setCompleted] = useState(todo.completed);

  const handleDelete = () => {
    onDeleteTodo(todo.id);
  };

  useEffect(() => {
    onToggleComplete(todo.id, completed);
  }, [completed, onToggleComplete, todo.id]);

  const handleSave = () => {
    // check if user entered non-empty title
    if (title.trim()) {
      onUpdateTodo(todo.id, title);
      setIsEditing(false);
    } else {
      onDeleteTodo(todo.id);
    }
  };

  return (
    <li
      style={{
        width: "90%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        marginTop="1rem"
        padding="1rem"
        sx={{ backgroundColor: "white", borderRadius: "15px" }}
      >
        {isEditing ? (
          <EditTodoForm
            title={title}
            setTitle={setTitle}
            handleSave={handleSave}
          />
        ) : (
          <>
            <Box
              display="flex"
              flexDirection="column"
              flexGrow={1}
              sx={{ maxWidth: "60%" }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 400 }}
                style={{
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                  whiteSpace: "normal",
                  paddingRight: "1rem",
                  textDecoration: completed ? "line-through" : "none",
                }}
              >
                {todo.title}
              </Typography>
              <Typography variant="caption">
                Status: {todo.completed ? "Completed" : "Incomplete"}
              </Typography>
            </Box>
            <TodoActions
              setIsEditing={setIsEditing}
              handleDelete={handleDelete}
              setCompleted={setCompleted}
              completed={completed}
            />
          </>
        )}
      </Box>
    </li>
  );
};
