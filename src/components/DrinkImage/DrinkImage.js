import { useState, useEffect } from 'react';
import { getImageURL } from 'util/firebase';
import { drinkImageStyle } from './style';

export const DrinkImage = ({
  drinkImageKey,
  ingredientsImageKey,
  className,
}) => {
  const [drinkImageUrl, setDrinkImageUrl] = useState();

  useEffect(() => {
    if(drinkImageKey) getImageURL(drinkImageKey).then((url) => setDrinkImageUrl(url));
  }, [drinkImageKey, ingredientsImageKey]);

  const renderImage = () => <img src={drinkImageUrl} alt='drink' />;

  const style = drinkImageStyle(className);
  return (
    <div className={style.outer}>
      {renderImage()}
    </div>
  );
};
