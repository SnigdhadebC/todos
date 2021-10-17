import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Button, Grid, TextField, Typography, Stack } from '@mui/material';
import Todo from './Todo';

const todoCard = {
    backgroundColor: '#F9F9F9',
    boxShadow: '1px 3px 3px'
}

export class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: {
                title: '',
                description: '',
                date:''
            },
            todos: []
        },
            this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    handleTodo(type,event) {
        if(type === 'title'){
            this.setState({
               todo: {
                    ...this.state.todo,
                    title: event.target.value
                }
            })
        }
        else if(type === 'description'){
            this.setState({
               todo: {
                    ...this.state.todo,
                    description: event.target.value
                }
            })
        }else{
            this.setState({
                todo: {
                     ...this.state.todo,
                     date: event.target.value
                 }
             })
        }
    }

    addTodo() {
        let todo = this.state.todo;
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }
    editTodo(data) {

    }
    deleteTodo(data) {
        this.setState({
            todos: this.state.todos.filter(e => e != data)
        })
    }

    render() {
        return (
            <div>
                <div>
                    <Card sx={{ maxWidth: 375, maxHeight: 475 }} style={todoCard}>
                        <CardContent>
                            <TextField label="Todo title" variant="outlined" onChange={(e) => this.handleTodo('title',e)} />
                            <br /><br />
                            <TextField label="Todo Description" variant="outlined" onChange={(e) => this.handleTodo('description',e)} />
                            <br /><br />
                            <TextField type="date" id="date" sx={{ width: 225 }} onChange={(e) => this.handleTodo('date',e)}/>
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined" onClick={this.addTodo}>Add Todo</Button>
                        </CardActions>
                    </Card>
                </div>

                <br /><br />

                <div>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {this.state.todos.map((todo, index) => {
                            return <Grid item key={index}><Todo data={todo} deleteTodo={this.deleteTodo} editTodo={this.editTodo} /></Grid>
                        })
                        }
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Todos
