import React, { Component } from "react";
import '../../utils';
import { isLogged } from "../../utils";
import axios from 'axios';
import ListItem from "../../components/listItem/ListItem";
import NewList from '.././../components/newList/NewList';
import { Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'


export default class Lists extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lists: [],
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        console.log('sdsads')
        this.setState({
            modal: !this.state.modal
        });
    }

    edit = (id, data) => {
        axios.put('/todo/' + id, data).then(res => {
            console.log(res)
            this.getLists()
        }).catch(ex => {
            console.error(ex)
        })
    }

    deleteList = async (id) => {
        if (window.confirm('Deseja deletar a lista?')) {
            const res = await axios.delete('/todo/' + id)
            this.getLists()
        }
    }

    componentWillMount() {
        this.getLists();
    }

    getLists = async () => {
        try {
            let res = await axios.get('/todos')
            console.log(res)
            if (res.status === 200) {
                let list = res.data
                let lists = []
                list.forEach((item) => {
                    lists.push({
                        listName: item.listName,
                        desc: item.desc,
                        id: item._id,
                    })
                })
                this.setState({
                    lists,
                })
            }
        } catch (ex) {
            console.error(ex, ex.response);
            this.getLists();
        }
    }

    componentDidMount() {
        var login = isLogged();
        console.log(login)
        if (!login) {
            this.props.history.push('/login');
        }
    }

    render() {
        let list = this.state.lists.map((item, index) => {
            return (
                <ListItem selectItem={() => { console.log("teste");this.props.history.push('/list/' + item.id) }} listName={item.listName} delete={this.deleteList} desc={item.desc} key={index} edit={this.edit} id={item.id} />
            )
        })

        return (

            <div style={{
                marginTop: '3%',
                marginLeft: '5%'
            }}>
                <h1 style={{
                    color: 'rgb(3, 136, 141)',
                    marginBottom: '2%'
                }}>To do Project</h1>
                <div style={{
                    marginBottom: '3%'
                }}>
                    <Button color="success" onClick={this.toggle}>Nova Lista</Button>
                </div>
                <div>
                    {list}
                </div>
                <NewList modal={this.state.modal} toggle={this.toggle} updateList={this.getLists} />
            </div>
        );
    }
}