import { useState, useEffect } from 'react';
import { Button, DrinkImage, Subheading } from 'components';
import { fetchDrink } from 'util/drinks';
import { formatList } from './helpers';
import BackSVG from 'assets/back.svg';
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

  const ingredientArray = drink.ingredients && formatList(drink.ingredients);
  const instructionsArray = drink.instructions && formatList(drink.instructions);

  const renderDrink = () => {
    return isLoading ? (
      <div>Loading...</div>
    ) : (
      <>
        <DrinkImage
          drinkImageKey={drink.drinkImageKey}
          ingredientsImageKey={drink.ingredientsImageKey}
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
            {ingredientArray?.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul>
          <Subheading
            label='Instructions'
            size='md'
            bg='white'
            bold
            className={style.textSpacing}
          />
          <ul>
            {instructionsArray?.map((instruction, i) => (
              <li key={i}>{instruction}</li>
            ))}
          </ul>
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
