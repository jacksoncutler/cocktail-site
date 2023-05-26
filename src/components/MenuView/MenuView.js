import Select from 'react-select'
import { useQuery } from 'contexts/QueryContext'
import { Button, MenuItem, Subheading } from 'components'
import SortDownSVG from 'assets/sort_down.svg'
import SortUpSVG from 'assets/sort_up.svg'
import drinkThumbnail from 'assets/drink-thumbnail.png'
import { sortTypes, sortTheme, getDrinkList } from './helpers'
import { menuViewStyle } from './style'

export const MenuView = ({ select }) => {
  const { sortType, sortDirection, changeSort, reverseSort } = useQuery()

  const renderMenuItems = () => {
    const categories = ['Gin', 'Rum', 'Whiskey']
    const drinks = getDrinkList()
    return categories.map(category => {
      const categoryDrinks = drinks.filter(drink => drink.category === category)
      return (
        <>
          <Subheading label={category} size='lg' bg='white' line />
          <div className={style.section}>
            { categoryDrinks.map(drink =>
              <MenuItem
                name={drink.name}
                desc={drink.desc}
                thumbnail={drinkThumbnail}
                select={ () => select(drink.name) }
              />
            ) }
          </div>
        </>
      )
    })
  }
  
  const renderSortIcon = () => <img src={(sortDirection === 'asc') ? SortDownSVG : SortUpSVG} alt='sort-direction' />
  const getCurrentSortType = () => sortTypes.find(type => type['value'] === sortType)
  const style = menuViewStyle()
  return (
    <div className={style.outer}>
      <div className={style.sort}>
        <Button 
          icon={renderSortIcon()}
          onClick={reverseSort}
        />
        <Select 
          options={sortTypes}
          defaultValue={getCurrentSortType()}
          onChange={type => changeSort(type.value)}
          theme={sortTheme}
          isSearchable={false}
        />
      </div>
      { renderMenuItems() }
    </div>
  )
}