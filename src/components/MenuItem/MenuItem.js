import { useState, useEffect } from 'react';
import { getImageURL } from 'util/firebase';
import { menuItemStyle } from './style';

export const MenuItem = ({ name, tags, thumbnailKey, onSelect }) => {
  const [imgUrl, setImgUrl] = useState();

  useEffect(() => {
    getImageURL(thumbnailKey).then((url) => setImgUrl(url));
  }, [thumbnailKey]);

  const renderDescription = () => tags.map((tag) => tag.name).join(' - ');
  const style = menuItemStyle();
  return (
    <div onClick={onSelect} className={style.outer}>
      <img src={imgUrl} className={style.img} alt={name} />
      <div className={style.inner}>
        <p className={style.name}>
          <b>{name}</b>
        </p>
        <p className={style.desc}>{renderDescription()}</p>
      </div>
    </div>
  );
};
