import React, { useState } from "react";
import { Card, CardContent, Grid, Typography} from "@mui/material";
export const Fruits = () => {
  const [data, setData] = useState([
    "apple",
    "Mango",
    "Banana",
    "Orange",
    "Kiwi",
    "Cherry",
  ]);

  return (

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom align="center">
              <span style={{color:"Red"}}><h3>Fruits Names</h3></span>
            </Typography>
          </Grid>

          {data.map((item) => (
            <Grid item xs={2}>
             <Typography variant="h5">   
              <b>  {item}</b>
             </Typography>
                </Grid>
          ))}
        </Grid>
      
  );
};
  