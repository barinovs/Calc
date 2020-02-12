import React, { Component } from 'react'
import styled, { css }  from 'styled-components';

import Form from 'react-bootstrap/Form'
import CheckboxComponent from '../checkboxComponent/checkboxComponent'

import './index.css'

const Indicator = styled.div`
    position: absolute;
    top: 2px;
    left: 0;
    height: 19px;
    width: 19px;
    background: #ffffff;
    border: ${ props => props.boldForEl ? '2px solid #107bb1' : '1px solid #107bb1'};
    border-radius: 3px;

    /* &:hover {
        border: 3px solid #107bb1;
    } */
`
const IndicatorWithAfter = styled.div`
    position: absolute;
    top: 2px;
    left: 0;
    height: 19px;
    width: 19px;
    border: 1px solid #107bb1;
    border-radius: 3px;
    background: #107bb1;
    &:after {
        left: 6px;
        top: 1px;
        width: 4px;
        height: 10px;
        border: solid #ffffff;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        box-sizing: unset;
        content: '';
        position: absolute;
    }
`

class CheckboxGroup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value:'USB',
            selectedValues: [],
            boldForEl: ''
        }

        this._change = this._change.bind(this)
        this.setBold = this.setBold.bind(this)
        this.changeCheck = this.changeCheck.bind(this)
    }

    _change(id, _checked, _this) {
        // this.setState({value})
        console.log('this ', _this);
        console.log('id ', id);
        console.log('_checked ', _checked);
        let {selectedValues} = this.state
        console.log('selectedValues ', selectedValues)
        if (_checked) {
            selectedValues = [...id]
        }
        console.log('selectedValues ', selectedValues);
    }

    setBold(el) {
        this.setState({
            boldForEl: el
        })
    }

    changeCheck(id, checked) {
        console.log('checked ', checked);

        let { selectedValues } = this.state
        if (checked) {
            selectedValues = [...selectedValues, ...id]
        }else{
            selectedValues = selectedValues.filter( item => item !== id )
        }


        // console.log(selectedValues);

        this.setState({selectedValues})
        console.log(selectedValues);
    }

    render() {
        let {typesOfControl} = this.props
        typesOfControl = typesOfControl.map( item => {
            item.checked = false
            return item
        } )

        return(
            <div style={{display: 'block'}}>

                    {
                        typesOfControl.map( (item) => {
                            return (
                                <div className="form-check">
                                    <label>{item.name}</label>
                                    <CheckboxComponent changeCheck = {this.changeCheck} id={item.id}/>
                                </div>
                            )
                        })
                    }


            </div>
        )
    }
}

export default CheckboxGroup
