// import { useEffect } from 'react'
import { Subheading } from 'components'
import { FilterItem } from 'components'
import { sidebarStyle } from './style'

export const Sidebar = ({ view, returnToSelection }) => {  
  const renderSidebar = () => {
    return view === 'menu' ? 
      <>
        <Subheading label='Liquor' size='md' />
        { liquors.map(liquor => <FilterItem label={liquor} />) }
      </>
      :
      <>
        <h2 onClick={returnToSelection} className='text-bold'>Return to Selection</h2>
      </>
  }
  
  const style = sidebarStyle()
  return (
    <div className={style.outer}>
      { renderSidebar() }
    </div>
  )
}

const liquors = [
  'Cognac/Brandy',
  'Gin',
  'Mezcal',
  'Rum',
  'Tequila',
  'Whiskey',
  'Vodka',
]