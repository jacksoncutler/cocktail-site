import { useState } from 'react'
import Select from 'react-select'
import { Button, MenuItem, Subheading } from 'components'
import SortDownSVG from 'assets/sort_down.svg'
import SortUpSVG from 'assets/sort_up.svg'
import drinkThumbnail from 'assets/drink-thumbnail.png'
import { sortOptions, sortTheme, getDrinkList } from './helpers'
import { menuViewStyle } from './style'

export const MenuView = ({ select }) => {
  const [sortDefault, setSortDefault] = useState(true)

  const reverseSort = () => { setSortDefault(!sortDefault) }
  const renderSortIcon = () => <img src={sortDefault ? SortDownSVG : SortUpSVG} alt='sort-direction' />
  const getDefaultSortValue = () => sortOptions.find(option => option['value'] === 'liquorType')
  const selectSortValue = (value) => { console.log(value) }

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
  
  const style = menuViewStyle()
  return (
    <div className={style.outer}>
      <div className={style.sort}>
        <Button 
          icon={renderSortIcon()}
          onClick={reverseSort}
        />
        <Select 
          options={sortOptions}
          defaultValue={getDefaultSortValue()}
          onChange={value => selectSortValue(value)}
          theme={sortTheme}
          isSearchable={false}
        />
      </div>
      { renderMenuItems() }
    </div>
  )
}