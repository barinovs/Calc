import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { chScreenH, chScreenW,  CH_SCREEN_H, CH_SCREEN_W} from '../../redux/actions'


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
            <div>
                <label>Размер экрана</label>
                <Row>
                    <Col lg="6">
                        <InputWithBtns koef={0.32} setValue={this.props.chScreenW} mod={this.props.screenW}/>
                        <div>Ширина</div>
                    </Col>
                    <Col lg="6">
                        <InputWithBtns koef={0.16} setValue={this.props.chScreenH} mod={this.props.screenH}/>
                        <div>Высота</div>
                    </Col>
                </Row>

            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
         screenH: state.allData.screenH,
         screenW: state.allData.screenW,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chScreenH: bindActionCreators(chScreenH, dispatch),
        chScreenW: bindActionCreators(chScreenW, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SizeOfScreen)
