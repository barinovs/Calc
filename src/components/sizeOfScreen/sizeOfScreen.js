import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import InputWithBtns from '../inputWithBtns/inputWithBtns'

class SizeOfScreen extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>Размер экрана
                <Row>
                    <Col lg="6">
                        <InputWithBtns koef={0.32}/>
                    </Col>
                    <Col lg="6">
                        <InputWithBtns koef={0.16}/>
                    </Col>
                </Row>

            </div>
        )
    }

}
export default SizeOfScreen
