import React, { Component } from "react";
import '../../utils';
import { isLogged } from "../../utils";
import axios from 'axios';
import ListItem from "../../components/listItem/ListItem";
import NewList from '.././../components/newList/NewList';
import { Button } from 'reactstrap'


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

    loggout = () => {
        localStorage.clear()
        this.props.history.push('/login');
    }


    render() {
        let list = this.state.lists.map((item, index) => {
            return (
                <ListItem selectItem={() => { console.log("teste"); this.props.history.push('/list/' + item.id) }} listName={item.listName} delete={this.deleteList} desc={item.desc} key={index} edit={this.edit} id={item.id} />
            )
        })

        return (

            <div>
                <div style={{
                    backgroundColor: 'rgba(80, 165, 159, 0.527)',
                }}>
                    <Button style={{
                        marginTop: '3px',
                        marginLeft: '3px',
                        marginBottom: '3px'
                    }} onClick={this.loggout}>Sair</Button>
                </div>
                <h1 style={{
                    color: 'rgb(3, 136, 141)',
                    marginTop: '3%',
                    marginLeft: '5%'
                }}>Projeto SEINFO18</h1>
                <div style={{
                    marginBottom: '3%',
                }}>
                    <Button color="success" onClick={this.toggle}
                        style={{
                            marginTop: '3%',
                            marginLeft: '5%'
                        }}>
                        Nova Lista
                    </Button>
                    <hr style={{
                        height: '12px',
                        border: '0',
                        boxShadow: 'inset 0 12px 12px -12px rgba(0, 0, 0, 0.5)',
                        marginLeft: '0%',
                    }} />
                </div>
                <div style={{
                    marginTop: '3%',
                    marginLeft: '5%'
                }}>
                    {list}
                </div>
                <NewList modal={this.state.modal} toggle={this.toggle} updateList={this.getLists} />
            </div>
        );
    }
}