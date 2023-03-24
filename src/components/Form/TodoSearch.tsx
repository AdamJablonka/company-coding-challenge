import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { useSearchStore } from "../../stores/useSearchStore";

export const TodoSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const updateSearch = useSearchStore((state) => state.updateSearch);

  useEffect(() => {
    updateSearch(searchQuery);
  }, [searchQuery, updateSearch]);

  return (
    <>
      <TextField
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        label="Search"
        variant="outlined"
        fullWidth
        style={{ marginTop: "1rem" }}
      />
    </>
  );
};
