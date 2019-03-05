import React from 'react'
import {Link} from 'react-router-dom'
import {Image, Container} from 'semantic-ui-react'

const Welcome = () => {
  return (
    <div className='welcome-page'>
      <Container textAlign='justified' centered="true" >
        <h1 className='welcome-p'>Welcome to the feke family!</h1>
        <Image className="ui centered medium image" src="/images/feke-purple.png" />

        <h2 className='welcome-p'>
          Begin your Niue language journey with help from your very own feke.
        </h2>
        <Link to ={`/feke`}>
          <button className="ui purple button">Adopt feke</button>
        </Link>

      </Container>
    </div>
  )
}
export default Welcome
