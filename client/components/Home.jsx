import React from 'react'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            translate: 'Kamata'
        }
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
                <input className='home-btn' type='button' value={this.state.translate} onMouseEnter={() => this.translate()}
                    onMouseLeave={() => this.revert()} />
            </div>
        )
    }
}

export default Home