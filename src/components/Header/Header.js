import { headerStyle } from './style'

export const Header = () => {const style = headerStyle()
  return (
    <div className={style.outer}>
      <div className={style.mainheader}>
        <h1 className={style.title}>Enter Title Here</h1>
        <div className={style.separator} />
        <input className={style.searchbar} type='text' placeholder='Search Drink Name' />
      </div>
      <div className={style.controlbar}>
        <button className={style.hamburgerIcon}>
          hamburger
        </button>
        <button className={style.searchIcon}>
          search
        </button>
      </div>
    </div>
  )
}