import React, { Component } from "react";
import { Col, Row, Button } from 'reactstrap';
import EditList from '../modal_edit/EditList';
import './ListItem.css'

export default class ListItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modal:false,
        }
        this.toggle = this.toggle.bind(this);
        
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }


    render() {
        return (
            <div>
                <Row>
                    <Col sm={8} onClick={this.props.selectItem}>
                        <h3>{this.props.listName}</h3>
                        <p>{this.props.desc}</p>
                    </Col>
                    <Col sm={1}>
                        <Button color="primary" onClick={this.toggle}>Editar</Button>
                    </Col>
                    <Col sm={1}>
                        <Button color="danger" onClick={()=>{this.props.delete(this.props.id)}}>X</Button>
                    </Col>
                </Row>
                <hr />
                <EditList modal={this.state.modal} toggle={this.toggle} id={this.props.id} listName={this.props.listName} desc={this.props.desc} edit={this.props.edit}/>
            </div>
        )
    }
}