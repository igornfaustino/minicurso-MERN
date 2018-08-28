import React, { Component } from "react";
import { Col, Row, Button, Input } from 'reactstrap';

export default class TodoItem extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Row>
                    <Col sm={1}>
                        <Input type="checkbox" checked={this.props.checked} onChange={this.props.onChange} />
                    </Col>
                    <Col sm={8} onClick={this.props.selectItem}>
                        <h3 style={{
                            textDecoration: this.props.checked ? "line-through" : ""
                        }}>{this.props.item}</h3>
                        <p >{this.props.desc}</p>
                    </Col>
                    <Col sm={1}>
                        <Button color="danger" onClick={() => { this.props.delete(this.props.id) }}>X</Button>
                    </Col>
                </Row>
                <hr />
            </div>
        )
    }
}

