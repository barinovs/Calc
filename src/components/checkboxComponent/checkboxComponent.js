import React, { Component } from 'react'
import styled, { css }  from 'styled-components';

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


class CheckboxComponent extends Component{
    constructor(props) {
        super(props)
        this.state = {
            checked: false
        }
        this.changeSelf = this.changeSelf.bind(this)
    }

    changeSelf() {
        this.setState(state => {
            return {checked: !state.checked}
        })
    }

    render() {
        if (this.state.checked ) {
            return <IndicatorWithAfter
                id = {this.props.id}
                onClick={ (e) => {
                                    this.props.changeCheck(e.target.id, !this.state.checked)
                                    this.changeSelf()
                                 }}
            />
        }else{
            return (
                <Indicator
                    onClick={ (e) => {
                                        this.props.changeCheck(e.target.id, !this.state.checked)
                                        this.changeSelf()
                                     }}
                    id = {this.props.id}
                />
            )
        }
    }

}

export default CheckboxComponent
