import { useState } from 'react'
import { headerStyle } from './style'

export const Header = ({ showSidebar, setShowSidebar }) => { 
  const [showSearch, setShowSearch] = useState(false)

  const toggleSidebar = () => setShowSidebar(!showSidebar)
  const toggleSearch = () => setShowSearch(!showSearch)
  
  const style = headerStyle()
  return (
    <div className={style.outer}>
      <div className={style.mainheader}>
        <h1 className={style.title}>Enter Title Here</h1>
        <div className={style.separator} />
        <input className={style.searchbar} type='text' placeholder='Search Drink Name' />
      </div>
      <div className={style.controlbar}>
        <button onClick={toggleSidebar} className={style.hamburgerIcon}>
          hamburger
        </button>
        <button onClick={toggleSearch} className={style.searchIcon}>
          search
        </button>
      </div>
    </div>
  )
}