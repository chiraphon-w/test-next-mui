import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";
import Chat from "./Chat";

type Props = {};

const RightBar: React.FC<Props> = () => {
  const onlineFriends = [
    {
      alt: "Ika Ikuyo",
      src: "https://i.ytimg.com/vi/doAklWScTlE/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gNCg2MA8=&rs=AOn4CLDzMTLjDfjfkYiOjLkdcoDFyaSapw",
    },
    {
      alt: "Yamada Ryo",
      src: "https://preview.redd.it/holy-shit-zubin-anime-girl-she-is-ryo-yamada-from-bocchi-v0-26pikitvkcy91.jpg?width=640&crop=smart&auto=webp&s=eafb06599985ff9d242310cb70275baa37b7b258",
    },
    {
      alt: "Ijichi Nijika",
      src: "https://i.pinimg.com/736x/d7/f3/19/d7f319490dd5b677a85389e5b59cee09.jpg",
    },
    {
      alt: "Ika Ikuyo",
      src: "https://i.ytimg.com/vi/doAklWScTlE/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gNCg2MA8=&rs=AOn4CLDzMTLjDfjfkYiOjLkdcoDFyaSapw",
    },
    {
      alt: "Yamada Ryo",
      src: "https://preview.redd.it/holy-shit-zubin-anime-girl-she-is-ryo-yamada-from-bocchi-v0-26pikitvkcy91.jpg?width=640&crop=smart&auto=webp&s=eafb06599985ff9d242310cb70275baa37b7b258",
    },
    {
      alt: "Ijichi Nijika",
      src: "https://i.pinimg.com/736x/d7/f3/19/d7f319490dd5b677a85389e5b59cee09.jpg",
    },
  ];

  const latestPhotos = [
    "https://staticg.sportskeeda.com/editor/2023/01/d6973-16738138947896-1920.jpg",
    "https://i0.wp.com/recommendmeanime.com/wp-content/uploads/2022/11/bocchi-the-rock-anime.png",
    "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/10/Bocchi-The-Rock!-Episode-4-Hitori-Gotou-Loses-Her-Mind-Crunchyroll.jpg",
  ];

  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: {
          xs: "none",
          md: "block",
        },
      }}
    >
      <Box position="fixed">
        {/* Online Friends Section */}
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          {onlineFriends.map((friend, index) => (
            <Avatar key={index} alt={friend.alt} src={friend.src} />
          ))}
        </AvatarGroup>

        {/* Latest Photos Section */}
        <Typography variant="h6" fontWeight={100} my={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          {latestPhotos.map((photo, index) => (
            <ImageListItem key={index}>
              <img src={photo} alt={`Latest Photo ${index + 1}`} />
            </ImageListItem>
          ))}
        </ImageList>

        {/* Latest Conversations Section */}
        <Typography variant="h6" fontWeight={100} my={2}>
          Latest Conversations
        </Typography>
        <Chat />
      </Box>
    </Box>
  );
};

export default RightBar;
