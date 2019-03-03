import React from 'react'
import FekeStatus from './FekeStatus'
import CategoryList from './CategoryList'

class Dashboard extends React.Component {

    render() {
        return (
            <div className='dashboard-page'>
                <FekeStatus />
                <CategoryList />
            </div >
        )
    }
}

export default Dashboard