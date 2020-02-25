import React, { Component } from 'react'

import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { chController, CH_CONTROLLER} from '../../redux/actions'

import RadioTypeOfControl from '../radioTypeOfControl/radioTypeOfControl'

class ControllerComponent extends Component{
    render() {
        return(
            <div>
                <label>Контроллер</label>
                <RadioTypeOfControl typesOfControl={this.props.typesOfControllers} setValue={this.props.chController}/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
         controller: state.allData.controller,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chController: bindActionCreators(chController, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControllerComponent)
