import React, { Component } from 'react'
import logo from './timg.jpg'
import './frame.less'

export default class NotFound extends Component {
    render() {
        return (
            <div className="logo">
                <img src={logo} alt="QFADMIN"/>
            </div>
        )
    }
}