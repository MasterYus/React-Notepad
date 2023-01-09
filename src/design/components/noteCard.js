import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { purple, red } from '@mui/material/colors';
import { Edit } from '@mui/icons-material';

export default function NoteCard(props) {
    const onClick = () => {
        props.onEditClick(props.note)
    }

    return (
        <Card margin sx={{ height:'100%' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: purple[600] }} aria-label="recipe">
                        {props.note.title[0].toUpperCase()}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="edit" onClick={onClick}>
                    <Edit />
                    </IconButton>
                }
                title={props.note.title}
                subheader={props.note.date}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.note.text}
                </Typography>
            </CardContent>
        </Card>
    )
}

