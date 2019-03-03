import React from 'react'
import {Link} from 'react-router-dom'
import {Image, Container, Divider} from 'semantic-ui-react'

const Welcome = () => {
  return (
    <div className='welcome-page'>

      <Image className="ui centered medium image" src="/images/feke-purple.png" />
      {/* <Image className="ui centered medium image" src="/images/feke-red.png" />
      <Image className="ui centered medium image" src="/images/feke-blue.png" />
      <Image className="ui centered medium image" src="/images/feke-green.png" /> */}
      {/* <Container textAlign='left'>Left Aligned</Container>
      <Container textAlign='center'>Center Aligned</Container>
      <Container textAlign='right'>Right Aligned</Container> */}
      <Container textAlign='justified' centered="true" >
       
        <h2 className='welcome-p'>
          Welcome to the feke family! You're about to begin a vagahau Niue journey with help from your feke. Touch any Niuean word to see it's translation.
        </h2>
        <Link to ={`/feke`}>
          <button className="ui purple button">CREATE FEKE</button>
        </Link>

      </Container>

    </div>
  )
}
export default Welcome
