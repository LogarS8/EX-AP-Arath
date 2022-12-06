import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
} from "@mui/material";
import { Typography } from "../ui";

export const CardE = ({ nombre, pueblo, inf, caracteristicas, img }) => {
  return (
    <Card
      sx={{
        margin: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        image={img}
        alt={nombre}
        sx={{ height: 180 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nombre}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {pueblo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {inf}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          {caracteristicas}
        </Typography>
      </CardContent>
      <CardActions>
        {/*<Button size="small">Share</Button>*/}
        {/*<Button size="small">Learn More</Button>*/}
      </CardActions>
    </Card>
  );
};
