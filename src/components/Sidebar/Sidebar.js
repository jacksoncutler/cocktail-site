import { Button, Subheading, FilterItem } from 'components'
import { useQuery } from 'contexts/QueryContext'
import BackSVG from 'assets/back.svg'
import CloseSVG from 'assets/close.svg'
import { getFilters } from './helpers'
import { sidebarStyle } from './style'

export const Sidebar = ({ view, returnToSelection, showSidebar, setShowSidebar }) => {
  const { clearFilters } = useQuery()
  const { liquors, ingredients } = getFilters()
  
  const renderSidebar = () => {
    return view === 'menu' ? 
      <>
        <div className={style.clearButton}>
          <Button 
            label='Clear All'
            onClick={clearFilters}
          />
        </div>
        
        <Subheading label='Liquor' size='md' bg='grey' line />
        { liquors.map((liquor, i) => <FilterItem id={i} label={liquor} />) }

        {/* get ridda this */}
        <div className='mb-8' />
        
        <Subheading label='Ingredients' size='md' bg='grey' line />
        { ingredients.map((ingredient, i) => <FilterItem id={i} label={ingredient} />) }
      </>
      :
      <>
        <Button
          icon={backIcon}
          label='Return to Selection'
          onClick={returnToSelection}
          className='w-full'
        />
      </>
  }
  
  const backIcon = <img src={BackSVG} alt='back' />
  const style = sidebarStyle(showSidebar)
  return (
    <>
      <div className={style.sidebar}>
        { renderSidebar() }
      </div>
      <div className={style.background} onClick={ () => setShowSidebar(false) }>
        <Button
          icon={<img src={CloseSVG} alt='close' />}
        />
      </div>
    </>
  )
}