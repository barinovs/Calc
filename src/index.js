import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {ModuleTypes} from './components'


class App extends Component {
    render() {
        return(
            <Container>
              <Row>
                <Col lg="3"><ModuleTypes /></Col>
                <Col lg="3">1 of 2</Col>
                <Col lg="2">1 of 2</Col>
                <Col lg="2">1 of 2</Col>
                <Col lg="2">1 of 2</Col>
              </Row>
              <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
              </Row>
            </Container>
        )

    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
