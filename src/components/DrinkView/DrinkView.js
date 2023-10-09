import { useState, useEffect } from 'react';
import { Button, DrinkImage, Subheading } from 'components';
import { fetchDrink } from 'api/drinks';
import { formatIngredients } from './helpers';
import BackSVG from 'assets/back.svg';
import drinkPic from 'assets/drink.png';
import ingredientPic from 'assets/ingredients.png';
import { drinkViewStyle } from './style';

export const DrinkView = ({ drinkId, returnToSelection }) => {
  const [drink, setDrink] = useState({});
  useEffect(() => {
    fetchDrink(drinkId).then((drink) => {
      setDrink(drink);
    });
  }, [drinkId]);

  const ingredientArray =
    drink.ingredients && formatIngredients(drink.ingredients);

  const backIcon = <img src={BackSVG} alt='back' />;
  const style = drinkViewStyle();
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
      <DrinkImage
        drink={drinkPic}
        ingredients={ingredientPic}
        className={style.img}
      />
      <div className={style.inner}>
        <Subheading label={drink.name} size='lg' bg='white' bold line />
        <Subheading
          label='Ingredients'
          size='md'
          bg='white'
          bold
          className={style.textSpacing}
        />
        <ul>
          {ingredientArray &&
            ingredientArray.map((ingredient) => <li>{ingredient}</li>)}
        </ul>
        <Subheading
          label='Instructions'
          size='md'
          bg='white'
          bold
          className={style.textSpacing}
        />
        <p>{drink.instructions}</p>
      </div>
    </div>
  );
};
