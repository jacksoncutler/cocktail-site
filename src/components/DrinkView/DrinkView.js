import { Button, Subheading } from 'components'
import { getDrinkData } from './helpers'
import BackSVG from 'assets/back.svg'
import drinkPic from 'assets/drink.png'
// import ingredientPic from 'assets/ingredients.png'
import { drinkViewStyle } from './style'

export const DrinkView = ({ drinkId, returnToSelection }) => {

  const backIcon = <img src={BackSVG} alt='back' />
  const drink = getDrinkData(drinkId)
  const renderIngredients = () => drink.ingredients.map(ingredient => <li>{ingredient}</li>)
  
  const style = drinkViewStyle()
  return (
    <div className={style.outer}>
      <div className='w-full md:hidden'>
        <Button
          icon={backIcon}
          label='Return to Selection'
          onClick={returnToSelection}
          className={style.return}
        />
      </div>
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