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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchDrink(drinkId)
      .then((drink) => {
        if (drink) setDrink(drink);
        setIsLoading(false);
      })
      .catch(() => {});
  }, [drinkId]);

  const ingredientArray =
    drink.ingredients && formatIngredients(drink.ingredients);

  const renderDrink = () => {
    return isLoading ? (
      <div>Loading...</div>
    ) : (
      <>
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
            {ingredientArray?.map((ingredient, i) => <li key={i}>{ingredient}</li>)}
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
      </>
    );
  };

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
      {renderDrink()}
    </div>
  );
};
