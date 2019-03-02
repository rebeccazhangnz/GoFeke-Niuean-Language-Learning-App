import React from 'react'
import { Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchCategoryList} from '../Actions'

class CategoryList extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'Micah',
            village: 'Hakupu'
        }
    }
    componentDidMount(){
        this.props.dispatch(fetchCategoryList())
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
                    {this.props.isLoading && <span>isLoading...</span>}
                    {this.props.categoryList && this.props.categoryList.map(list=>{
                        return (
                            <h1 key={list.name}><Link to={`/category/${list.name}`}>{list.name}</Link></h1>
                        )
                    })}  
                </div>          
            </div>
        )
    }
}
function mapStateToProps(state){
    //console.log(state.CategoryList)
    return {
        categoryList: state.categoryList
    }
}
export default connect(mapStateToProps)(CategoryList)