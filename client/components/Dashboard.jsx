import React from 'react'
import { Image } from 'semantic-ui-react'

import { Link } from 'react-router-dom'


class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'Micah',
            village: 'Hakupu'
        }
    }




    render() {
        return (
            <div className='dashboard-page'>
                <div className='dashboard-feke'>
                    <Image src='/images/feke-green.png' size="medium" centered />
                    <h1>Name: <span>{this.state.name}</span></h1>
                    <h1>Village: <span>{this.state.village}</span></h1>
                </div>
                <div className='dashboard-category'>
                    {/* LINKS TO CATEGORY */}
                    <h1>GREETINGS</h1>
                    <h1>FAMILY</h1>
                    <h1>FOOD</h1>
                    <h1>NUMBERS</h1>
                </div>
            </div>
        )
    }
}

export default Home