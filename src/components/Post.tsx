import React from "react";
import { MoreVert, FavoriteBorder, Favorite, Share } from "@mui/icons-material";
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Checkbox,
} from "@mui/material";

type Props = {};

const Post = (props: Props) => {
  return (
    <Card
      sx={{
        margin: 5,
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            K
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Kessoku Band"
        subheader="December 25, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://www.online-station.net/wp-content/uploads/2022/12/02bocchiending-00a.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Kessoku Band (結束バンド, Kessoku Bando) is the main unit band of
          Bocchi the Rock! series. The name "Kessoku Band" is a pun on "Kessoku"
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
