import React, { Component } from 'react'


import Form from 'react-bootstrap/Form'

import './index.css'

// export default function RadioTypeOfControl({typesOfControl}) {
//     return(
//         <div style={{display: 'block'}}>
//             <Form>
//                 {
//                     typesOfControl.map( (item) => {
//                         return (
//
//                                 <Form.Check
//                                     type='radio'
//                                     label={item.name}
//                                     checked={item.value && this.state.value}
//                                 />
//
//                         )
//                     })
//                 }
//             </Form>
//         </div>
//     )
// }

class RadioTypeOfControl extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value:'USB'
        }

        this._change = this._change.bind(this)
    }

    _change(value) {
        console.log(value);
        this.setState({value}) 
    }

    render() {
        const {typesOfControl} = this.props
        return(
            <div style={{display: 'block'}}>
                <Form>
                    {
                        typesOfControl.map( (item) => {
                            return (
                                <Form.Check
                                    key={item.id}
                                    type='radio'
                                    label={item.name}
                                    value={item.value}
                                    checked={item.value == this.state.value}
                                    onChange={ (e) => this._change(e.target.value) }
                                />
                            )
                        })
                    }
                </Form>
            </div>
        )
    }
}

export default RadioTypeOfControl
