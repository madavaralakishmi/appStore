import './index.css'

const TabItem = props => {
  const {tabsList, onbutton, isActive} = props
  const {displayText, tabId} = tabsList

  const onButtonClicked = () => {
    onbutton(tabId)
  }
  const result = isActive ? ' btn-clicked ' : ''

  return (
    <li>
      <button type="button" onClick={onButtonClicked} className={result}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
