/* eslint react/react-in-jsx-scope: off */
import { useSelector } from 'react-redux'

const Notification = () => {
  const message = useSelector(({notification}) => {
    return notification
  })

  return (
    <div>
      {message}
    </div>
  )
}

export default Notification