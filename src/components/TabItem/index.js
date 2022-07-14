import './index.css'

const TabItem = props => {
  const {tabsList, onbutton} = props
  const {displayText, tabId} = tabsList

  const onButtonClicked = () => {
    onbutton(tabId)
  }

  return (
    <li>
      <button type="button" onClick={onButtonClicked}>
        {displayText}
      </button>
      <hr />
    </li>
  )
}
export default TabItem
