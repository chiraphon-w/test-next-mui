import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";

type Props = {};

type ChartListType = {
  avatar: string;
  name: string;
  text: string;
};

const Chat = (props: Props) => {
  const chatList: ChartListType[] = [
    {
      avatar:
        "https://i.ytimg.com/vi/doAklWScTlE/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gNCg2MA8=&rs=AOn4CLDzMTLjDfjfkYiOjLkdcoDFyaSapw",
      name: "Ika Ikuyo",
      text: " — Gotoh san, may I ask you about guitar?",
    },
    {
      avatar:
        "https://preview.redd.it/holy-shit-zubin-anime-girl-she-is-ryo-yamada-from-bocchi-v0-26pikitvkcy91.jpg?width=640&crop=smart&auto=webp&s=eafb06599985ff9d242310cb70275baa37b7b258",
      name: "Yamada Ryo",
      text: " — I don't have any money, well can you give me some money?",
    },
    {
      avatar:
        "https://i.pinimg.com/736x/d7/f3/19/d7f319490dd5b677a85389e5b59cee09.jpg",
      name: "Ijichi Nichika",
      text: " — Bocchi chan, The Stary is closed today! see you next day!",
    },
  ];
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {chatList.map((n, index) => {
        return (
          <div key={index}>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="avatar" src={n.avatar} />
              </ListItemAvatar>
              <ListItemText primary={n.name} secondary={n.text} />
            </ListItem>
          </div>
        );
      })}
    </List>
  );
};

export default Chat;
