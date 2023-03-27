import { Container, Typography, Box } from "@mui/material";
import { TodoList } from "./components/Elements/List/TodoList";
import { CreateNew, TodoTabs } from "./components/Elements/Button/index";
import { TodoSearch } from "./components/Form/index";
import { TopAppBar } from "./components/Elements/AppBar/TopAppBar";

function App() {
  return (
    <div>
      <TopAppBar />
      <div className="slanted-background" />
      <main>
        <div>
          <Container maxWidth="sm">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{ marginTop: "1rem" }}
            >
              <Typography
                variant="h3"
                sx={{ marginRight: "1rem", fontWeight: "bold" }}
              >
                Todo list
              </Typography>
              <CreateNew />
            </Box>
            <TodoTabs />
            <TodoSearch />
            <TodoList />
          </Container>
        </div>
      </main>
    </div>
  );
}

export default App;
