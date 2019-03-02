import React from 'react'
import { Image, Container } from 'semantic-ui-react'
import FekeStatus from './FekeStatus'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Micah',
            village: 'Hakupu'
        }
    }




    render() {
        return (
            <div className='dashboard-page'>
                <FekeStatus />
                <Container textAlign='justified' centered="true" >
                    <div className='dashboard-container'>
                        {/* LINKS TO CATEGORY */}
                        <div className='dashboard-btn'>
                            {/* <Link to={`/greetings`}> */}
                            <button className="dashboard-btn ui purple button" >GREETINGS</button>

                            {/* </Link> */}
                        </div>
                        <div className='dashboard-btn'>
                            {/* <Link to={`/family`}> */}
                            <button className="dashboard-btn ui purple button" >FAMILY</button>

                            {/* </Link> */}
                        </div>

                        <div className='dashboard-btn'>
                            {/* <Link to={'/food'}> */}
                            <button className="dashboard-btn ui purple button" >FOOD</button>

                            {/* </Link> */}
                        </div>

                        <div className='dashboard-btn'>
                            {/* <Link to={'/numbers'}> */}
                            <button className="dashboard-btn ui purple button" >NUMBERS</button>
                            {/* </Link> */}
                        </div>
                    </div>

                </Container>
            </div >
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         //   placeHolderProps: (placeholderCategoryName) => {
//         // dispatch(placeHolderAction(placeholderCategoryName))
//         //   }
//     }
// }

// connect(mapDispatchToProps)()Dashboard
export default Dashboard