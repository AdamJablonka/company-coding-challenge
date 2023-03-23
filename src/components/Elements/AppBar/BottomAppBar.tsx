import { AppBar, CssBaseline, Toolbar, Box } from '@mui/material';
import { TodoForm } from '../../Form';

export const BottomAppBar = () => {
    return (
        <AppBar 
          position="fixed" 
          color="default" 
          sx={{ 
            top: 'auto', 
            bottom: 0,
            boxShadow: '0 -2px 3px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#FFF'
          }}>
          <Toolbar variant="dense" sx={{ justifyContent: 'center' , alignItems: 'center'}}>
            <TodoForm />
          </Toolbar>
        </AppBar>
      );
}
