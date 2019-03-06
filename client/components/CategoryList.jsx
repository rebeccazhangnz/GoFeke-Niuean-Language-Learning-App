import React from 'react'
import { Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCategoryList } from '../actions'

const capitalize = (word) => {
  return word[0].toUpperCase() + word.split('').slice(1).join('')
}

class CategoryList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCategoryList())
  }

  render() {
    return (
      <Container textAlign='justified' centered="true" >
        {/* <h2>Select a category to learn</h2> */}
        <div className='dashboard-container'>
          {this.props.isLoading && <span>isLoading...</span>}
          {this.props.categoryList && this.props.categoryList.map(list => {
            return (
              <Link className="dashboard-btn" to={`/category/${list.name}`} key={list.name}>
                <button className="dashboard-btn ui purple button">{capitalize(list.name)}
                </button>
              </Link>
            )
          })}
        </div>
      </Container>
    )
  }
}
function mapStateToProps(state) {
  return {
    categoryList: state.categoryList
  }
}
export default connect(mapStateToProps)(CategoryList)