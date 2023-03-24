import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useSearchStore } from "../../../stores";
import { ContentPasteSearchOutlined } from "@mui/icons-material";

export const TodoTabs = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const updateTodoFilter = useSearchStore((state) => state.updateTodoFilter);

  React.useEffect(() => {
    updateTodoFilter(value);
  }, [value]);

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab label="All" />
        <Tab label="Incomplete" />
        <Tab label="Completed" />
      </Tabs>
    </Box>
  );
};
