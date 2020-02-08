import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'

class ModuleTypes extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        const { moduleTypesArray } = this.props

        const renderOptions = options => {
            console.log('options ', options);
          return options.map(option => {
            return (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            );
          });
        };

        return(
            <div>
                <label>Тип модулей</label>
                <Form.Control
                    as="select"
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
