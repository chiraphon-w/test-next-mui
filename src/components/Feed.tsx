import React from "react";
import { Box } from "@mui/material";
import Post from "./Post";

type Props = {};

const Feed = (props: Props) => {
  const posts = [1, 2, 3, 4];
  return (
    <Box flex={6} p={2}>
      {posts.map((_, index) => (
        <Post key={index} />
      ))}
    </Box>
  );
};

export default Feed;
