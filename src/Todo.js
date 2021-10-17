import { Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'

const todoCard = {
    backgroundColor: '#F9F9F9',
    boxShadow: '1px 3px 3px'
}

export default function Todo(props) {
    return (
        <Card sx={{ maxWidth: 375 }} style={todoCard}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.data.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.data.date}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => props.deleteTodo(props.data)}>Delete</Button>
                <Button onClick={() => props.editTodo(props.data)}>Edit</Button>
            </CardActions>
        </Card>
    )
}
