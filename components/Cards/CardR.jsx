import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import { Typography } from "../ui";

export const CardR = ({ titulo, tipo, contenido, img }) => {
  return (
    <Container sx={{ pl: "32px" }}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: "2rem",
        }}
      >
        <CardMedia
          component="img"
          image={img}
          alt={titulo}
          sx={{ height: 180 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {titulo}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {tipo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {contenido}
          </Typography>
        </CardContent>
        <CardActions>
          {/*<Button size="small">Share</Button>*/}
          {/*<Button size="small">Learn More</Button>*/}
        </CardActions>
      </Card>
    </Container>
  );
};
