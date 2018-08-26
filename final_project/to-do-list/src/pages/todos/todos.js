import React, { Component } from "react";
import { Col, Row, Button, Container } from 'reactstrap';
import axios from "axios"
import TodoItem from "../../components/todoItem/todoItem"
import NewTodo from "../../components/newTodo/newTodo"

export default class Todos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: "",
            listName: "",
            desc: "",
            toDo: [],
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        console.log('sdsads')
        this.setState({
            modal: !this.state.modal
        });
    }

    componentDidMount() {
        const { id } = this.props.match.params
        this.setState({ id })
        this.getList(id)
    }

    getList = (id) => {
        axios.get("/todo/" + id).then(res => {
            console.log(res)
            let todo = []
            res.data.toDo.forEach(item => {
                todo.push({
                    id: item._id,
                    item: item.item,
                    desc: item.desc,
                    checked: item.checked
                })
            });
            this.setState({
                listName: res.data.listName,
                desc: res.data.desc,
                toDo: todo
            })
        }).catch(ex => {
            console.error("GETLIST", ex)
        })
    }

    change = (idx) => {
        let todos = this.state.toDo
        todos[idx].checked = !todos[idx].checked
        this.setState({
            toDo: todos
        }, () => {
            console.log(this.state)
            this.update()
        })
    }

    update = () => {
        let todos = []
        this.state.toDo.forEach((value) => {
            todos.push({
                item: value.item,
                desc: value.desc,
                checked: value.checked
            })
        })
        axios.put('/todo/' + this.state.id, {
            listName: this.state.listName,
            desc: this.state.desc,
            toDo: todos,
        }).then(res => {
            let todo = []
            res.data.toDo.forEach(item => {
                todo.push({
                    id: item._id,
                    item: item.item,
                    desc: item.desc,
                    checked: item.checked
                })
            });
            this.setState({
                listName: res.data.listName,
                desc: res.data.desc,
                toDo: todo
            })
        }).catch(ex => {
            console.log("UPDATE", ex)
        })
    }

    add = (data) => {
        console.log(data)
        this.setState({
            toDo: this.state.toDo.push(data)
        })
        console.log(this.state.toDo.map)
        this.update()
        this.toggle()
    }

    delete = (id) => {
        let todos = this.state.toDo.filter((value) => {
            return (value.id != id)
        })
        this.setState({
            toDo: todos
        }, () => {
            this.update()
        })
    }

    render() {
        let items
        if (this.state.toDo.map) {
            items = this.state.toDo.map((value, index) => {
                return (<TodoItem id={value.id} checked={value.checked} item={value.item} desc={value.desc} key={index} onChange={() => {
                    this.change(index)
                }} delete={this.delete} />)
            })
        }

        return (
            <div>
                <h1>{this.state.listName}</h1>
                <p>{this.state.desc}</p>
                <Button onClick={() => {
                    this.props.history.push('/')
                }}>Voltar</Button>
                <Button color="success" onClick={this.toggle}>Adicionar</Button>
                <Container>
                    {items}
                </Container>
                <NewTodo add={this.add} modal={this.state.modal} toggle={this.toggle} />
            </div>
        )
    }
}