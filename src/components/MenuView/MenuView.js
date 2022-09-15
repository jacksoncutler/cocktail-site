import { Subheading } from 'components'
import { MenuItem } from 'components'
import drinkThumbnail from 'assets/drink-thumbnail.png'
import { menuViewStyle } from './style'

export const MenuView = ({ select }) => {
  const style = menuViewStyle()
  return (
    <>
      <div className={style.upper}>
        <p onClick={() => {}} className={style.sort}>
          Sort by Liquor
        </p>
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
    </>
  )
}

const placeholders = [...Array(101).keys()]