import { Grid } from "@mui/material";

function Dashboard() {
  const gridSpacing = 3;

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <div>dupa1</div>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <div>dupa2</div>
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <div>dupa3</div>
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <div>dupa4</div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
            <div>dupa5</div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div>dupa6</div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Dashboard;