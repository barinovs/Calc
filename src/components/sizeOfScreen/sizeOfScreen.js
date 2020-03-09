import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { chScreenH, chScreenW, chTotalW, chTotalH} from '../../redux/actions'


import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import InputWithBtns from '../inputWithBtns/inputWithBtns'

class SizeOfScreen extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        const {moduleW, moduleH, totalW, totalH } = this.props
        return(
            <div>
                <label>Размер экрана</label>
                <Row>
                    <Col lg="6">
                        <InputWithBtns
                            koef={moduleW/1000}
                            setValue={this.props.chScreenW}
                            mod={this.props.screenW}
                            totalW={totalW}
                        />
                        <div>Ширина</div>
                    </Col>
                    <Col lg="6">
                        <InputWithBtns
                            koef={moduleH/1000}
                            setValue={this.props.chScreenH}
                            mod={this.props.screenH}
                            totalH={totalH}
                        />
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
         moduleW: state.allData.moduleW,
         moduleH: state.allData.moduleH,
         totalW: state.allData.totalW,
         totalH: state.allData.totalH,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chScreenH: bindActionCreators(chScreenH, dispatch),
        chScreenW: bindActionCreators(chScreenW, dispatch),
        chTotalW: bindActionCreators(chTotalW, dispatch),
        chTotalH: bindActionCreators(chTotalH, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SizeOfScreen)
