import React from 'react'
import { Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCategoryList } from '../actions'

class CategoryList extends React.Component {
   
    componentDidMount(){
        this.props.dispatch(fetchCategoryList())
    }
    
    render() {
        return (
            <Container textAlign='justified' centered="true" >
                <div className='dashboard-container'>
                    <div className='dashboard-btn'>
                        {this.props.isLoading && <span>isLoading...</span>}
                        {this.props.categoryList && this.props.categoryList.map(list=>{
                            return (
                                <Link to={`/category/${list.name}`}>
                                <button className="dashboard-btn ui purple button"  key={list.name} > {list.name}
                                </button> 
                                </Link>
                            )
                        })}  
                    </div>          
                </div>
            </Container>
        )
    }
}
function mapStateToProps(state){
    return {
        categoryList: state.categoryList
    }
}
export default connect(mapStateToProps)(CategoryList)
