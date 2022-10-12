import { Subheading } from 'components'
import { FilterItem } from 'components'
import { sidebarStyle } from './style'

export const Sidebar = ({ view, returnToSelection, showSidebar }) => {
  
  const renderSidebar = () => {
    return view === 'menu' ? 
      <>
        <Subheading label='Liquor' size='md' bg='grey' line />
        { liquors.map(liquor => <FilterItem label={liquor} />) }
        <div className='mb-8' />
        <Subheading label='Ingredients' size='md' bg='grey' line />
        { ingredients.map(ingredient => <FilterItem label={ingredient} />)}
      </>
      :
      <>
        <h2 onClick={returnToSelection} className='font-bold'>Return to Selection</h2>
      </>
  }
  
  const style = sidebarStyle(showSidebar)
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

const ingredients = [
  'Lemon Juice',
  'Lime Juice',
  'Orange Juice',
  'Pineapple Juice',
  'Simple Syrup',
  'Honey Syrup',
  'Ginger Syrup',
  'Cinnamon Syrup',
  'Lemon Twist',
  'Orange Twist',
  'Angostura Bitters',
  'Orange Bitters',
  'Peychaud\'s Bitters',
  'Sweet Vermouth',
  'Dry Vermouth',
  'Ginger Beer',
  'Triple Sec',
  'Club Soda',
  'Tonic Water',
  'Maraschino Liqueur',
  'Averna Amaro',
  'Grenadine',
  'Orgeat',
  'Overproof Jamaican Rum',
].sort()