import React, { Component } from 'react'

import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { chDT, chDV, chDL, setDisDT, CH_DT, CH_DV, CH_DL, SET_DIS_DT} from '../../redux/actions'
import CheckboxGroup from '../checkboxGroup/checkboxGroup'
import CheckboxComponent from '../checkboxComponent/checkboxComponent'


class Sensors extends Component{

    constructor(props) {
        super(props)
        this.clickSelf = this.clickSelf.bind(this)
    }

    clickSelf(type) {
        const { chDT, chDV, chDL, setDisDT } = this.props

        switch(type) {
            case 'dt':
                chDT(!this.props.dt.value)
                break
            case 'dv':
                chDV(!this.props.dv.value)
                if (!this.props.dv.value) {
                    setDisDT(true)
                    chDT(true)
                }else{
                    setDisDT(false)
                }
                break
            case 'dl':
                chDL(!this.props.dl.value)
                break
        }
    }

    render() {
        const { chDT, chDV, chDL, dt, dv, dl } = this.props
        const classDT = (dt.dis)?"control dis":"control"

        return(
            <div>
                <label>Датчики</label>
                <br />
                <label
                    className={classDT}
                    onClick={ () => { this.clickSelf('dt') } }
                >
                    Температура
                    <CheckboxComponent checked={dt.value} id="dt" changecheck={chDT}/>
                </label>
                <label
                    className="control"
                    onClick={ () => { this.clickSelf('dv')} }
                >
                    Влажность
                    <CheckboxComponent checked={dv.value} id="dv" changecheck={chDV}/>
                </label>
                <label
                    className="control"
                    onClick={ () => { this.clickSelf('dl')} }
                >
                    Яркость
                    <CheckboxComponent checked={dl.value} id="dl" changecheck={chDL}/>
                </label>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
         dt: state.allData.dt,
         dv: state.allData.dv,
         dl: state.allData.dl,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chDT: bindActionCreators(chDT, dispatch),
        chDV: bindActionCreators(chDV, dispatch),
        chDL: bindActionCreators(chDL, dispatch),
        setDisDT: bindActionCreators(setDisDT, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sensors)
