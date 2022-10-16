import './Error.css'
import sadFace from './sad-face.mp4'

const Error = () => {
  return (
    <div className='error-message'>
      <h1>Oh what the flipping heck?!</h1>
      <h1>It looks like someone didn't put the movies on the shelf!</h1>
      <video autoPlay muted loop preload='auto' className='sad-face'>
        <source src={sadFace} type='video/mp4'/>
      </video>
    </div>
  )
}

export default Error;