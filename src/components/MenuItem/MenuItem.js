import { menuItemStyle } from './style'

export const MenuItem = ({ name, desc, thumbnail, select }) => {
  const style = menuItemStyle()
  return (
    <div onClick={select} className={style.outer}>
      <img src={thumbnail} className={style.img} alt={name} />
      <div className={style.inner}>
        <p className={style.name}><b>{name}</b></p>
        <p className={style.desc}>{desc}</p>
      </div>
    </div>
  )
}