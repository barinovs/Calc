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

    render() {
        let {typesOfControl} = this.props
        typesOfControl = typesOfControl.map( item => {
            item.checked = false
            return item
        } )

        return(
            <div style={{display: 'block'}}>
                <Form>
                    {
                        typesOfControl.map( (item) => {
                            return (

                                  <Form.Check
                                    type="checkbox"
                                    id="t"
                                    key={item.id}
                                  >
                                    <Form.Check.Input
                                      type = "checkbox"
                                      value = {item.value}
                                      checked = {item.checked}
                                      onChange = { () => {} }
                                      className = "control"
                                      id = "t"
                                    />
                                    <Form.Check.Label htmlFor="t"
                                        id = {item.value}
                                        checked={false}
                                        onClick = { (e) => this._change(e.target.id, e.target.checked, this)}
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

export default CheckboxGroup
