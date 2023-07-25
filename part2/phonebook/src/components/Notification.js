const Notification = ({ message, errorMessage }) => {

    if (message === null && errorMessage === null) {
      return null
    } else if (errorMessage !== null) {
        return (
            <div className='error'>
              {errorMessage}
            </div>
          )
    } else {
        return (
            <div className='message'>
              {message}
            </div>
          )
    }
  

}
  
export default Notification