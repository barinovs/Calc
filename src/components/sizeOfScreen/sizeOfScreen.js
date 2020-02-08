import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'
import InputWithBtns from '../inputWithBtns/inputWithBtns'

class SizeOfScreen extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>Размер экрана
                <InputWithBtns />
            </div>
        )
    }

}
export default SizeOfScreen
