import { Subheading } from 'components'
import { getDrinkData } from './helpers'
import drinkPic from 'assets/drink.png'
// import ingredientPic from 'assets/ingredients.png'
import { drinkViewStyle } from './style'

export const DrinkView = ({ drinkId }) => {

  const drink = getDrinkData(drinkId)
  const renderIngredients = () => drink.ingredients.map(ingredient => <li>{ingredient}</li>)
  
  const style = drinkViewStyle()
  return (
    <div className={style.outer}>
      <img src={drinkPic} className={style.img} alt='drink' />
      <div className={style.inner}>
        <Subheading label={drink.name} size='lg' bg='white' bold line />
        <Subheading label='Ingredients' size='md' bg='white' bold 
          className={style.textSpacing}
        />
        <ul>
          { renderIngredients() }
        </ul>
        <Subheading label='Instructions' size='md' bg='white' bold 
          className={style.textSpacing}
        />
        <p>{drink.instructions}</p>
      </div>
    </div>
  )
}