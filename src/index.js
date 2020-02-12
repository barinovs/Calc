import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {ModuleTypes} from './components'
import {SizeOfScreen} from './components'
import {TypeOfControl} from './components'
import {ControllerComponent} from './components'
import {Sensors} from './components'

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

const typesOfControl1 = [
    {
        id: 1,
        name: 'USB',
        note: '',
        value: 'USB'
    },
    {
        id: 2,
        name: 'Ethernet',
        note: '',
        value: 'ETHERNET'
    },
    {
        id: 3,
        name: 'WI-FI',
        note: '',
        value: 'WI-FI'
    },
    {
        id: 4,
        name: 'COM(RS232)',
        note: '',
        value: 'RS232'
    }
]

const typesOfControl2 = [
    {
        id: 1,
        name: 'Медиаплеер',
        note: '',
        value: 'offline'
    },
    {
        id: 2,
        name: 'Синхронный',
        note: '(нужен компьютер)',
        value: 'online'
    },
    {
        id: 3,
        name: 'Видеопроцессор',
        note: '',
        value: 'proc'
    }
]

const typesOfControllers = [
    {
        id: 1,
        name: 'Внутренний',
        note: '',
        value: 'inner'
    },
    {
        id: 2,
        name: 'Внешний',
        note: '(отдельный бокс)',
        value: 'outer'
    },
]

const sensors = [
    {
        id: 1,
        name: 'Температура',
        note: '',
        value: 'temp',
        enabled: false
    },
    {
        id: 2,
        name: 'Влажность',
        note: '',
        value: 'wet',
        enabled: false
    },
    {
        id: 3,
        name: 'Яркость',
        note: '',
        value: 'bright',
        enabled: false
    },
]

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formData: {
                mod_id: '',
                w: '',
                h: ''
            }
        }
        this.setValue = this.setValue.bind(this)

    }

    setValue(dType, value) {
        console.log('dType ', dType);
        console.log('value ', value);
        // let formData = this.state.formData
        // formData.mod_id = id
        // this.setState({formData})
        switch (dType) {
            case 'mod_id':
                this.setState({ formData: { ...this.state.formData, mod_id: value} });
                break
            case 'w':
                this.setState({ formData: { ...this.state.formData, w: value} });
                break
            case 'h':
                this.setState({ formData: { ...this.state.formData, h: value} });
                break
        }
    }

    render() {
        return(
            <Container>
              <Row>
                <Col lg="3"><ModuleTypes moduleTypesArray={moduleTypesArray} setValue={this.setValue}/></Col>
                <Col lg="3"><SizeOfScreen setValue={this.setValue}/></Col>
                <Col lg="2"><TypeOfControl typesOfControl1={typesOfControl1} typesOfControl2={typesOfControl2}/></Col>
                <Col lg="2"><ControllerComponent typesOfControllers={typesOfControllers}/></Col>
                <Col lg="2"><Sensors sensors={sensors}/></Col>
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
