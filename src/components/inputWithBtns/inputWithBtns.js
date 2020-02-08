import React, { Component } from 'react'


import './index.css'

class InputWithBtns extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="input-group my-touchspin bootstrap-touchspin-injected">
                <input className="touchspin-vertical form-control"></input>

                <span className="input-group-btn-vertical-my">
                    <button className="btn btn-primary bootstrap-touchspin-up-my icon-arrow-up22"></button>
                    <button className="btn btn-primary bootstrap-touchspin-down-my icon-arrow-down22"></button>
                </span>
            </div>
        )
    }

}
export default InputWithBtns
