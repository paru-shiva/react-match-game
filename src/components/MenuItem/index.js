import './index.css'

const MenuItem = props => {
  const {tab, selectedTabId, onTabSelection} = props
  const {tabId, displayText} = tab

  const onbtnclk = () => {
    onTabSelection(tabId)
  }

  const menuStyle = selectedTabId === tabId ? 'selectedItem' : 'unselectedItem'

  return (
    <li>
      <button type="button" onClick={onbtnclk} className={menuStyle}>
        {displayText}
      </button>
    </li>
  )
}

export default MenuItem
