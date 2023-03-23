import * as React from 'react'
import { useState } from 'react'
import { TextField, Button, Box, Fab, Snackbar } from '@mui/material'
import { useTodoStore } from '../../stores/useTodoStore'
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import AddIcon from '@mui/icons-material/Add';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const TodoForm = () => {
    const createTodo = useTodoStore((state) => state.createTodo)
    const clearTodos = useTodoStore((state) => state.clearTodos)
    const [title, setTitle] = useState('')
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
      };    

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
        return;
    }

    setOpen(false);
    };  

    const addTodo = () => {
        if (title.trim()) {
          createTodo({ id: Date.now(), title, completed: false })
          setTitle('')
          setOpen(true);
        }
    }

    return(
        <Box display="flex" flexDirection="row" gap={2} margin="0.5rem" justifyContent="center" alignItems="center">
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Todo Created!
                </Alert>
            </Snackbar>
            <TextField
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              label="New Todo"
              variant="outlined"
              fullWidth
            />
            <Box display="flex" alignItems="center" m={1}>
                <Fab color="primary" aria-label="add" onClick={addTodo}>
                    <AddIcon />
                </Fab>
            </Box>
        </Box>
    )
};