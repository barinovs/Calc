import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { chModuleType, setModuleTypes, chScreenH, chScreenW } from  '../../redux/actions'
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
        const { moduleTypesArray, moduleTypes } = this.props

        const renderOptions = options => {
          return options.map(option => {
            return (
              <OptionComponent
                  key={option.id}
                  option={option}
              />
            );
          });
        };

        return(
            <div>
                <label>Тип модулей</label>
                <Form.Control
                    as="select"
                    onChange={ e => {
                        let dataset = e.target.options[e.target.selectedIndex].dataset;
                        this.props.chModuleType(e.target.value, dataset.width, dataset.height)
                    } }
                >
                {
                    renderOptions(moduleTypes)
                }
                </Form.Control>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
         moduleType: state.moduleType,
         moduleTypes: state.moduleTypes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chModuleType: bindActionCreators(chModuleType, dispatch),
        setModuleTypes: bindActionCreators(setModuleTypes, dispatch),
        chScreenH: bindActionCreators(chScreenH, dispatch),
        chScreenW: bindActionCreators(chScreenW, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModuleTypes)
