import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { chVideo, CH_VIDEO } from '../../redux/actions'
import CheckboxComponent from '../checkboxComponent/checkboxComponent'

class SupportVideoComponent extends React.Component{
    constructor(props) {
        super(props)
        this.clickSelf = this.clickSelf.bind(this)
    }

    clickSelf() {
        this.props.chVideo(!this.props.video)
    }

    render() {
        const { chVideo, video } = this.props
        return(
            <div>
                <label
                    className="control"
                    onClick={ () => { this.clickSelf('dt') } }
                >
                Поддержка видео
                <CheckboxComponent checked={video} id="video" changecheck={chVideo}/>
                </label >
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        video : state.allData.video,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chVideo: bindActionCreators(chVideo, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SupportVideoComponent)
