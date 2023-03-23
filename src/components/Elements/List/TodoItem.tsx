import { useState, useEffect } from 'react'
import { TodoItemProps } from '../../../types/index'
import { Button, TextField, Tooltip, IconButton, Box, Typography } from '@mui/material'
import { TodoActions } from '../Button/TodoActions';
import SaveIcon from '@mui/icons-material/Save';

export const TodoItem = ({ todo, onUpdateTodo,  onDeleteTodo, onToggleComplete }: TodoItemProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(todo.title);
    const [completed, setCompleted] = useState(todo.completed);

    const handleDelete = () => {
      onDeleteTodo(todo.id);
    }

    useEffect(() => {
      onToggleComplete(todo.id, completed)
    }, [completed])
  
    const handleSave = () => {
      // check if user entered non-empty title
      if (title.trim()) {
        onUpdateTodo(todo.id, title);
        setIsEditing(false);
      }
    };
  
    return (
    <div>
      <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      padding="1rem"
      marginBottom="0.5rem"
      boxShadow="0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
    >
        {isEditing ? (
          <>
            <TextField
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              label="Edit Todo"
              variant="outlined"
              sx={{ width: '75%'}}
            />
            <Tooltip title="Save">
              <IconButton onClick={handleSave}>
                <SaveIcon />
              </IconButton>
            </Tooltip>
          </>
        ) : (
          <>
          <Box display="flex" flexDirection="column" flexGrow={1} sx={{ maxWidth: '60%' }}>
            <Typography 
              variant="h6"
              style={{
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                whiteSpace: 'normal',
                paddingRight: '1rem',
              }} 
              >
                {todo.title}
            </Typography>
            <Typography variant="caption" >Status: {todo.completed ? "Completed" : "Incomplete"}</Typography>
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
      </div>
    );
  };