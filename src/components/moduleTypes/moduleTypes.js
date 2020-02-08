import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'

class ModuleTypes extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <label>Тип модулей</label>
                <Form.Control
                    as="select"
                    value="test"
                >
                    <option value={"Value 1"}>Value 1</option>
                </Form.Control>
            </div>
        )
    }

}
export default ModuleTypes
