import React from 'react'
import {Link} from 'react-router-dom'
import {Container} from 'semantic-ui-react'


class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            translate: 'Start'
        }
    }

    componentDidMount() {
        return this.setState({ translate: 'Start' })
    }

    translate = () => {
        this.setState({
            translate: 'Kamata'
        })
    }

    revert = () => {
        this.setState({
            translate: 'Start'
        })
    }

    render() {
        return (
          <div>
            <div className='home-page'>
            <Container>
                <h1 className='home-title'>Join the feke family. Learn vagahau Niue.</h1>
                <Link to ='/welcome'><input className="ui purple button" type='button' value={this.state.translate} onMouseEnter={() => this.translate()}
                    onMouseLeave={() => this.revert()} /></Link>
            </Container>
            </div>
            </div>
        )
    }
}

export default Home