import { useState } from 'react'
import Select from 'react-select'
import { Button, MenuItem, Subheading } from 'components'
import SortDownSVG from 'assets/sort_down.svg'
import SortUpSVG from 'assets/sort_up.svg'
import drinkThumbnail from 'assets/drink-thumbnail.png'
import { sortOptions, sortTheme } from './helpers'
import { menuViewStyle } from './style'

export const MenuView = ({ select }) => {
  const [sortDefault, setSortDefault] = useState(true)

  const reverseSort = () => { setSortDefault(!sortDefault) }
  const renderSortIcon = () => <img src={sortDefault ? SortDownSVG : SortUpSVG} alt='sort-direction' />
  const getDefaultSortValue = () => sortOptions.find(option => option['value'] === 'liquorType')
  const selectSortValue = (value) => { console.log(value) }
  
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
      <Subheading label='Whiskey' size='lg' bg='white' line />
      <div className={style.section}>
        {
          placeholders.map(n => { return n%2 === 0 ?
              <MenuItem 
                name='Old Fashioned' 
                desc='Bourbon - Simple Syrup - Angostura Bitters - Orange Bitters - Orange Twist'
                thumbnail={drinkThumbnail}
                select={ () => select(n)}
              />
              :
              <MenuItem 
                name='Spicy Avocado Mint Margarita' 
                desc='Puerto Rican Rum - Jamaican Rum - Allspice Dram - Lime Juice - Orange Juice - Cinnamon Syrup - Vanilla Syrup - Angostura Bitters'
                thumbnail={drinkThumbnail}
                select={ () => select(n)}
              />
          })
        }
      </div>
    </div>
  )
}

const placeholders = [...Array(101).keys()]