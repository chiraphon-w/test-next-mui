import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

type Props = {}

const RightBar = (props: Props) => {
  return (
    <Box flex={2} p={2} sx={{
      display: {
        xs: 'none',
        sm: 'block'
      }
    }}>
      <Box position={'fixed'}>
        <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={5}>
          <Avatar alt="Goto Hitori" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5FxgcsnbiVACWYOxc5S6jLAZ26ge3BA0vKw&usqp=CAU" />
          <Avatar alt="Ika Ikuyo" src="https://i.ytimg.com/vi/doAklWScTlE/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gNCg2MA8=&rs=AOn4CLDzMTLjDfjfkYiOjLkdcoDFyaSapw" />
          <Avatar alt="Yamada Ryo" src="https://preview.redd.it/holy-shit-zubin-anime-girl-she-is-ryo-yamada-from-bocchi-v0-26pikitvkcy91.jpg?width=640&crop=smart&auto=webp&s=eafb06599985ff9d242310cb70275baa37b7b258" />
          <Avatar alt="Ijichi Nijika" src="https://i.pinimg.com/736x/d7/f3/19/d7f319490dd5b677a85389e5b59cee09.jpg" />
          <Avatar alt="Goto Hitori" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5FxgcsnbiVACWYOxc5S6jLAZ26ge3BA0vKw&usqp=CAU" />
          <Avatar alt="Ika Ikuyo" src="https://i.ytimg.com/vi/doAklWScTlE/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gNCg2MA8=&rs=AOn4CLDzMTLjDfjfkYiOjLkdcoDFyaSapw" />
          <Avatar alt="Yamada Ryo" src="https://preview.redd.it/holy-shit-zubin-anime-girl-she-is-ryo-yamada-from-bocchi-v0-26pikitvkcy91.jpg?width=640&crop=smart&auto=webp&s=eafb06599985ff9d242310cb70275baa37b7b258" />
          <Avatar alt="Ijichi Nijika" src="https://i.pinimg.com/736x/d7/f3/19/d7f319490dd5b677a85389e5b59cee09.jpg" />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} my={2}>latest Photos</Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src='https://staticg.sportskeeda.com/editor/2023/01/d6973-16738138947896-1920.jpg'
              alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://i0.wp.com/recommendmeanime.com/wp-content/uploads/2022/11/bocchi-the-rock-anime.png'
              alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/10/Bocchi-The-Rock!-Episode-4-Hitori-Gotou-Loses-Her-Mind-Crunchyroll.jpg'
              alt=''
            />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100} my={2}>
          latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Ika Ikuyo" src="https://i.ytimg.com/vi/doAklWScTlE/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gNCg2MA8=&rs=AOn4CLDzMTLjDfjfkYiOjLkdcoDFyaSapw" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://preview.redd.it/holy-shit-zubin-anime-girl-she-is-ryo-yamada-from-bocchi-v0-26pikitvkcy91.jpg?width=640&crop=smart&auto=webp&s=eafb06599985ff9d242310cb70275baa37b7b258" />
            </ListItemAvatar>
            <ListItemText
              primary="Yamada Ryo"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="" src="https://i.pinimg.com/736x/d7/f3/19/d7f319490dd5b677a85389e5b59cee09.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Ijichi Nichika"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default RightBar