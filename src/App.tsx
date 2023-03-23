import { Typography, AppBar, CssBaseline, Toolbar, Container, Box } from '@mui/material';
import { TodoList } from './components/Elements/List/TodoList'
import { TodoSearch } from './components/Form/index'
import { BottomAppBar } from './components/Elements/AppBar/BottomAppBar';
import Logo from './assets/logo.svg'

function App() {
  return (
    <div>
      <CssBaseline />
      <AppBar position="relative" sx={{ minWidth: '100%' }}>
        <Toolbar>
          <Box display="flex" alignItems="center">
              <img src={Logo} alt="Logo" />
              <Typography variant="h6">ClearBlade Todolist</Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm" sx={{ paddingBottom: '6rem' }}>
            <TodoSearch />
            <TodoList />
           </Container>
           <BottomAppBar />
        </div>
      </main>
    </div>
  );
}

export default App;
