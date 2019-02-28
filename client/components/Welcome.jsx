import React from 'react'

class Welcome extends React.Component {
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
            <div className='welcome-page'>
                <h1 className='welcome-title'>Feke Welcomes you</h1>
                <input type='button' value={this.state.translate} onMouseEnter={() => this.translate()}
                    onMouseLeave={() => this.revert()} />
            </div>
        )
    }
}

export default Welcome