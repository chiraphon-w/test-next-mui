import React from 'react'
import { Box } from '@mui/material'
import Post from './Post'

type Props = {}

const Feed = (props: Props) => {
    return (
        <Box flex={4} p={2}>
            <Post />
            <Post />
            <Post />
            <Post />
        </Box>
    )
}

export default Feed