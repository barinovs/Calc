import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { chModuleType, CH_MODULE_TYPE, setModuleTypes, SET_MODULE_TYPES } from  '../../redux/actions'
import axios from 'axios'

import OptionComponent from '../optionComponent/optionComponent'

import Form from 'react-bootstrap/Form'

class ModuleTypes extends Component{
    constructor(props) {
        super(props)
        this.state = {moduleTypes: []}
    }

    componentDidMount() {
        axios.get('http://calc.loc/api/getModules.php', {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            console.log("response ", response.data);
            this.setState({moduleTypes: response.data})
            this.props.setModuleTypes(response.data)
        })
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
                    onChange={ e => {this.props.chModuleType(e.target.value)} }
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

const mapStateToProps = (state) => {
    return {
         moduleType: state.moduleType
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chModuleType: bindActionCreators(chModuleType, dispatch),
        setModuleTypes: bindActionCreators(setModuleTypes, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModuleTypes)
