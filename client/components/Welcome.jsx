import React from 'react'
import { Image, Container, Divider } from 'semantic-ui-react'
import SvgSquiggle from './SvgSquiggle'

const Welcome = () => {

  return (
    <div className='welcome-page'>

      <Image src='https://placebear.com/g/1000/1000' size='large' circular centered />

      {/* <Container textAlign='left'>Left Aligned</Container>
      <Container textAlign='center'>Center Aligned</Container>
      <Container textAlign='right'>Right Aligned</Container> */}
      <Container textAlign='justified' centered="true" >
        <Divider />
        <h2 className='welcome-p'>
          Welcome to the feke fam. You're about to begin the journey of learning Niuean through the power of Feke. You can touch any Niuean word to see it's translation.
      </h2>
      <SvgSquiggle />
      
      </Container>
    </div>
  )
}
export default Welcome
