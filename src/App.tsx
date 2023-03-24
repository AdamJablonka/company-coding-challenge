import { CssBaseline, Container, Typography, Box } from "@mui/material";
import { TodoList } from "./components/Elements/List/TodoList";
import { CreateNew, TodoTabs } from "./components/Elements/Button/index";
import { TodoSearch } from "./components/Form/index";
import { TopAppBar } from "./components/Elements/AppBar/TopAppBar";

function App() {
  return (
    <div style={{ backgroundColor: "#f9f9f9", height: "100vh" }}>
      <CssBaseline />
      <TopAppBar />
      <main>
        <div>
          <Container maxWidth="sm" sx={{ paddingBottom: "6rem" }}>
            <Box display="flex" alignItems="center" sx={{ marginTop: "1rem" }}>
              <Typography
                variant="h3"
                sx={{ marginRight: "1rem", fontWeight: "bold" }}
              >
                Today's Tasks
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
