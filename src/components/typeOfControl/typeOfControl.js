import React, { Component } from 'react'

import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { chTypeOfControl, CH_TYPE_OF_CONTROL} from '../../redux/actions'

import RadioTypeOfControl from '../radioTypeOfControl/radioTypeOfControl'

class TypeOfControl extends Component{
    render() {
        return(
            <div>
                <label>Тип управления</label>
                <RadioTypeOfControl typesOfControl={this.props.typesOfControl1} setValue={this.props.chTypeOfControl}/>
                <RadioTypeOfControl typesOfControl={this.props.typesOfControl2} setValue={this.props.chTypeOfControl}/>
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
        chTypeOfControl: bindActionCreators(chTypeOfControl, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TypeOfControl)
