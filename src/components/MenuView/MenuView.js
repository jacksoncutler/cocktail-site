import { Subheading } from 'components'
import { MenuItem } from 'components'
import drinkThumbnail from 'assets/drink-thumbnail.png'
import { menuViewStyle } from './style'

export const MenuView = () => {
  const style = menuViewStyle()
  return (
    <div className={style.outer}>
      <Subheading label='Whiskey' size='lg' />
      <div className={style.section}>
        {
          placeholders.map(n => { return n%2 === 0 ?
              <MenuItem 
                name='Old Fashioned' 
                desc='Bourbon - Simple Syrup - Angostura Bitters - Orange Bitters - Orange Twist'
                thumbnail={drinkThumbnail}
              />
              :
              <MenuItem 
                name='Spicy Avocado Mint Margarita' 
                desc='Puerto Rican Rum - Jamaican Rum - Allspice Dram - Lime Juice - Orange Juice - Cinnamon Syrup - Vanilla Syrup - Angostura Bitters'
                thumbnail={drinkThumbnail}
              />
          })
        }
      </div>
    </div>
  )
}

const placeholders = [...Array(101).keys()]