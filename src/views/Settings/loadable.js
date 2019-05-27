//解释react-loadable原理，无缝切换
import React, { Component } from 'react'

const loadable = ({
    loader,
    loading: Loading
}) => {
    return class LoadableComponent extends Component {
        state = {
            LoadableComponent: null
        }
        componentDidMount() {
            loader()
            .then(resp => {
                this.setState({
                    LoadedComponent: resp.default
                })
            })
        }
        render() {
            const {
                LoadedComponent
            } = this.state
            return (
                LoadedComponent
                ?
                <LoadedComponent />
                :
                <Loading />
            )
        }
    }
}

export default Loadable