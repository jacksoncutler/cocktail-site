import { Subheading } from 'components'
import drinkPic from 'assets/drink.png'
import ingredientPic from 'assets/ingredients.png'
import { drinkViewStyle } from './style'

export const DrinkView = ({ drinkId }) => {
  const style = drinkViewStyle()
  return (
    <div className={style.outer}>
      <img src={drinkPic} className={style.img} alt='drink' />
      <div className={style.inner}>
        <Subheading label='Old Fashioned' size='lg' bg='white' bold line />
        <Subheading label='Ingredients' size='md' bg='white' bold 
          className={style.textSpacing}
        />
        <ul>
          <li>2 oz. Bourbon</li>
          <li>1/4 oz. Simple Syrup</li>
          <li>3 dashes Angostura Bitters</li>
          <li>1 dash Orange Bitters</li>
          <li>1 Orange Twist</li>
        </ul>
        <Subheading label='Instructions' size='md' bg='white' bold 
          className={style.textSpacing}
        />
        <p>
          Add all ingredients to mixing glass with ice and stir until chilled. Strain into glass with large ice cube and garnish with orange twist.
        </p>
      </div>
    </div>
  )
}