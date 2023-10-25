import React from "react";
import { Fruits } from "./components/Fruits";
import { Color } from "./components/Color";
import { Card, CardContent, Grid } from "@mui/material";

function App() {
  return (
    <Grid container spacing={2} sx={{ padding: 2, marginLeft: 2 }}>
      <Card sx={{ bgcolor: "rgb(255,160,122)", height: "670px" }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card sx={{ padding: 5 }}>
                <CardContent>
                  <Fruits />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: 2 }}>
              <Card
                sx={{ bgcolor: "rgb(32,178,170)", marginTop: 3, height: 300 }}
              >
                <CardContent>
                  <Color />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default App;
