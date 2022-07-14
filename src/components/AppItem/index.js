import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {appName, imageUrl} = appsList

  return (
    <li className="bg-white">
      <img src={imageUrl} alt={appName} />
      <p className="paragraph">{appName}</p>
    </li>
  )
}

export default AppItem
