import React, { Component } from 'react'

import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { chTypeOfControl1, chTypeOfControl2, CH_TYPE_OF_CONTROL_1} from '../../redux/actions'

import RadioTypeOfControl from '../radioTypeOfControl/radioTypeOfControl'

class TypeOfControl extends Component{
    render() {
        return(
            <div>
                <label>Тип управления</label>
                <RadioTypeOfControl typesOfControl={this.props.typesOfControl1} setValue={this.props.chTypeOfControl1}/>
                <RadioTypeOfControl typesOfControl={this.props.typesOfControl2} setValue={this.props.chTypeOfControl2}/>
            </div>
        )
    }
}

// export default function TypeOfControl({typesOfControl1, typesOfControl2, setValue}) {
//     return(
//         <div>
//             <label>Тип управления</label>
//             <RadioTypeOfControl setValue={setValue} typesOfControl={typesOfControl1} valueType="t"/>
//             <RadioTypeOfControl setValue={setValue} typesOfControl={typesOfControl2} />
//         </div>
//     )
// }


const mapStateToProps = (state) => {
    return {
         typeOfControl: state.allData.typeOfControl,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chTypeOfControl1: bindActionCreators(chTypeOfControl1, dispatch),
        chTypeOfControl2: bindActionCreators(chTypeOfControl2, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TypeOfControl)
