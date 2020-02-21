import React, { Component } from 'react'

import OptionComponent from '../optionComponent/optionComponent'

import Form from 'react-bootstrap/Form'

class ExecutionTypesComponent extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const { executionTypesArray } = this.props
        return(
            <div>
            <label>Тип исполнения</label>
            <Form.Control
                as="select"
                // onChange={ e => {this.props.setValue('mod_id', e.target.value)} }
            >
            {
                executionTypesArray.map( item => {
                    return (
                        <OptionComponent key={item.id} option={item}/>
                )} )
            }
            </Form.Control>
            </div>
        )
    }
}

export default ExecutionTypesComponent
