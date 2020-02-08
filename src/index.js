import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {ModuleTypes} from './components'

const moduleTypesArray = [
    {
        id: 1,
        groupName: 'Монохромные',
        items : [
            {id:265, name: "P10R SMD (красный) (320 x 160) QIANGLI"},
            {id:733, name: "P10W (белый) (320 x 160) MEIYAD"},
            {id:734, name: "P10Y (жёлтый) (320 x 160) MEIYAD"},
            {id:735, name: "P10G (зелёный) (320 x 160) MEIYAD"}
        ]
    },
    {
        id: 2,
        groupName: 'RGB уличные',
        items : [
            {id:267, name: "P10-Q SMD 6000 (320 x 160) QIANGLI"},
            {id:269, name: "P8-Q SMD 5500 (320 x 160) QIANGLI"},
            {id:270, name: "P6-Q SMD 5500 (192 x 192) QIANGLI"},
            {id:702, name: "P6.66-Q SMD 5500 (320 x 160) QIANGLI"}
        ]
    },
]

class App extends Component {
    render() {
        return(
            <Container>
              <Row>
                <Col lg="3"><ModuleTypes moduleTypesArray={moduleTypesArray}/></Col>
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
