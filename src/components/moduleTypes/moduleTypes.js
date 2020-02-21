import React, { Component } from 'react'

import OptionComponent from '../optionComponent/optionComponent'

import Form from 'react-bootstrap/Form'

class ModuleTypes extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        const { moduleTypesArray } = this.props

        const renderOptions = options => {
          return options.map(option => {
            return (
              <OptionComponent key={option.id} option={option}/>
            );
          });
        };

        return(
            <div>
                <label>Тип модулей</label>
                <Form.Control
                    as="select"
                    onChange={ e => {this.props.setValue('mod_id', e.target.value)} }
                >
                {
                    moduleTypesArray.map( item => {
                        return (
                            <optgroup key={item.id} label={item.groupName}>
                                {renderOptions(item.items)}
                            </optgroup>
                    )} )
                }
                </Form.Control>
            </div>
        )
    }

}
export default ModuleTypes
