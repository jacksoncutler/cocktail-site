import { menuItemStyle } from './style';

export const MenuItem = ({ name, tags, thumbnail, select }) => {
  const renderDescription = () => {
    return tags.map((tag) => tag.name).join(' - ');
  };

  const style = menuItemStyle();
  return (
    <div onClick={select} className={style.outer}>
      <img src={thumbnail} className={style.img} alt={name} />
      <div className={style.inner}>
        <p className={style.name}>
          <b>{name}</b>
        </p>
        <p className={style.desc}>{renderDescription()}</p>
      </div>
    </div>
  );
};
