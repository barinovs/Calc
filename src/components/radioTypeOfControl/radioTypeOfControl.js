import React, { Component } from 'react'
import styled, { css }  from 'styled-components';

import Form from 'react-bootstrap/Form'

import './index.css'

const Indicator = styled.div`
    position: absolute;
    top: 2px;
    left: 0;
    height: 19px;
    width: 19px;
    border-radius: 50%;
    cursor: pointer;
    border: ${ props => props.boldForEl ? '2px solid #107bb1' : '1px solid #107bb1'};

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
    border-radius: 50%;
    background: #107bb1;
    &:after {
        left: 6px;
        top: 6px;
        height: 6px;
        width: 6px;
        border-radius: 50%;
        background: #ffffff;
        box-sizing: unset;
        content: '';
        position: absolute;
    }
`

class RadioTypeOfControl extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value:'USB',
            boldForEl: ''
        }

        this._change = this._change.bind(this)
        this.setBold = this.setBold.bind(this)
    }

    _change(value) {
        this.setState({value})
        this.props.setValue(value)
    }

    setBold(el) {
        this.setState({
            boldForEl: el
        })
    }

    render() {
        const {typesOfControl} = this.props
        const _style = {
            "before":{
            boxSizing: "unset",
            content: '',
            position: "absolute",
            display: "none"}
        }
        return(
            <div style={{display: 'block'}}>
                <Form>
                    {
                        typesOfControl.map( (item) => {
                            const beforeClass = item.value == this.state.value
                            return (

                                  <Form.Check
                                    type="radio"
                                    id="t"
                                    key={item.id}
                                  >
                                    <Form.Check.Input
                                      type = "radio"
                                      value = {item.value}
                                      checked = {item.value == this.state.value}
                                      onChange = { () => {} }
                                      className = "control"
                                      id = "t"
                                    />
                                    <Form.Check.Label htmlFor="t"
                                        id = {item.value}
                                        onClick = { (e) => this._change(e.target.id)}
                                        onMouseEnter = { (e) => {
                                                this.setBold(e.target.id)
                                            }
                                        }
                                        onMouseOut = { (e) => {
                                                this.setBold('')
                                            }
                                        }
                                        style = {{'cursor':'pointer'}}
                                    >
                                        {item.name}
                                    </Form.Check.Label>
                                    {(item.value == this.state.value)
                                        ? <IndicatorWithAfter />
                                        : <Indicator
                                            boldForEl = {item.value == this.state.boldForEl}
                                            id={item.value}
                                            onMouseEnter={(e) => {
                                                e.target.classList.add('bold-ring')
                                                console.log(e.target.classList)
                                            }
                                            }
                                            onMouseOut={(e) => {
                                                e.target.classList.remove('bold-ring')
                                                console.log(e.target.classList)
                                            }
                                            }
                                            onClick={ (e) => this._change(e.target.id)}
                                          />
                                      }

                                  </Form.Check>
                            )
                        })
                    }
                </Form>

            </div>
        )
    }
}

export default RadioTypeOfControl
