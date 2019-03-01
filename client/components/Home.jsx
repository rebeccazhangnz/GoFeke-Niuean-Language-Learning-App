import React from 'react'
import { Link } from 'react-router-dom'


class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            translate: 'Kamata'
        }
    }

    componentDidMount() {
        return this.setState({ translate: 'Kamata' })
    }

    translate = () => {
        this.setState({
            translate: 'Start'
        })
    }

    revert = () => {
        this.setState({
            translate: 'Kamata'
        })
    }

    render() {
        return (
            <div className='home-page'>
                <h1 className='home-title'>Feke Welcomes you</h1>
                <Link to={`/welcome`} ><button className='home-btn ui button' type='button' value={this.state.translate} onMouseEnter={() => this.translate()}
                    onMouseLeave={() => this.revert()} >{this.state.translate}</button></Link>
            </div>
        )
    }
}

export default Home