import React,{useState} from "react";
import { Card, CardContent, Grid,Typography } from "@mui/material";
export const Color = () => {
   const [data, setData] = useState( [ "Yellow" ,"Skyblue" , "brown" , "Green" ]   );
  return( 
      <Grid container spacing={3}>
        <Grid item xs={12} sx={{marginTop:7}}>
            <Typography variant="h5" gutterBottom align="center">
              <span style={{color:"white", fontWeight:"bold"}}><b>Color's  Name</b></span>
            </Typography>
            </Grid>
        {
            data.map((item)=>(
                <Grid item xs={3} sx={{marginTop:2}}>
                    <Card>
                        <CardContent>
                          <b>  <h2>{item}</h2></b>
                         </CardContent>
                    </Card>
                    </Grid>
            ))
        }
        </Grid>

  )
};
