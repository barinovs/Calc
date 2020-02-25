import React, { Component } from 'react'

import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { chDT, chDV, chDL, CH_DT, CH_DV, CH_DL} from '../../redux/actions'
import CheckboxGroup from '../checkboxGroup/checkboxGroup'
import CheckboxComponent from '../checkboxComponent/checkboxComponent'


// export default function Sensors({sensors}) {
//     return(
//         <div>
//             <label>Датчики</label>
//             <CheckboxComponent id="dt"/>
//         </div>
//     )
// }

class Sensors extends Component{
    render() {
        return(
            <div>
                <label>Датчики</label>
                <br />
                <label className="control">
                    Температура
                    <CheckboxComponent id="dt" changeCheck={this.props.chDT}/>
                </label>
                <label className="control">
                    Влажность
                    <CheckboxComponent id="dv" changeCheck={this.props.chDV}/>
                </label>
                <label className="control">
                    Яркость
                    <CheckboxComponent id="dl" changeCheck={this.props.chDL}/>
                </label>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
         controller: state.allData.dt,
         controller: state.allData.dv,
         controller: state.allData.dl,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chDT: bindActionCreators(chDT, dispatch),
        chDV: bindActionCreators(chDV, dispatch),
        chDL: bindActionCreators(chDL, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sensors)
