import { Grid, Rating } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/system/Box";
import Dashboard from "./views/dashboard";

function App() {
  return (
    <Box component="section" sx={{ width: "100vw", display: "flex", justifyContent: "center", flexDirection: "column", padding: "20px"}}>
      <Dashboard></Dashboard>
      <Button variant="contained">Hello world</Button>
      <Rating value={5}></Rating>
      <Grid container spacing={3} sx={{bgcolor: "primary.main"}}></Grid>
    </Box>
  );
}

export default App;
