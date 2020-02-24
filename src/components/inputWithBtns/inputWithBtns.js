import React, { Component } from 'react'

import './index.css'

class InputWithBtns extends Component{
    constructor(props) {
        super(props)
        this.state = {
            mod: 0,
            inpText: ""
        }

        this.input = React.createRef();

        this.increaseMod = this.increaseMod.bind(this)
        this.decreaseMod = this.decreaseMod.bind(this)
        this.updateText  = this.updateText.bind(this)
        this.changeInpText = this.changeInpText.bind(this)
    }

    componentDidMount() {
        this.setState({
            mod: this.props.mod
        });
        this.updateText(this.props.mod)
    }

    changeInpText(textInp) {
        console.log('textInp ', textInp);
        let mod = (textInp / this.props.koef).toFixed()
        this.setState({mod})
    }

    updateText(mod) {
        let inpText = String(this.props.koef.toFixed(3))
        if (mod > 0) {
            inpText = (mod * this.props.koef).toFixed(3)
            this.setState( state => {
                return {inpText: inpText}
            })
        }else{
            // inpText = "доделать"
        }
        this.input.current.value = inpText
    }

    increaseMod() {
        let mod = this.state.mod + 1
        this.setState( state => {
            return {mod: state.mod + 1}
        } )

        this.updateText(mod)
        this.props.setValue(mod)
    }

    decreaseMod() {
        let mod = this.state.mod - 1
        if (mod == 0) mod++
        this.setState( state => {
            if (state.mod > 1) {
                return {mod: state.mod - 1}
            }else{
                return {mod: 1}
            }

        } )
        this.updateText(mod)
        this.props.setValue(mod)
    }

    render() {
        const { mod, inpText } = this.state
        return(
            <div>
                <div className="input-group my-touchspin bootstrap-touchspin-injected">
                    <input
                        type="text"
                        className="touchspin-vertical form-control"
                        ref={this.input}
                        onChange={ (e) => this.changeInpText(e.target.value) }

                        defaultValue=""
                    ></input>

                    <span className="input-group-btn-vertical-my">
                        <button
                            className="btn btn-primary bootstrap-touchspin-up-my icon-arrow-up22"
                            onClick={ () => this.increaseMod()}
                        >
                        </button>
                        <button
                            className="btn btn-primary bootstrap-touchspin-down-my icon-arrow-down22"
                            onClick={ () => this.decreaseMod()}
                        >
                        </button>
                    </span>
                </div>
                <div className="shift">{mod} мод</div>
            </div>
        )
    }

}
export default InputWithBtns
