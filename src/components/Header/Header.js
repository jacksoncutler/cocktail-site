import { useState } from 'react'
import { Button } from 'components'
import MenuSVG from 'assets/menu.svg'
import SearchSVG from 'assets/search.svg'
import { headerStyle } from './style'

export const Header = ({ showSidebar, setShowSidebar }) => { 
  const [showSearch, setShowSearch] = useState(false)

  const toggleSidebar = () => setShowSidebar(!showSidebar)
  const toggleSearch = () => setShowSearch(!showSearch)

  const menuIcon = <img src={MenuSVG} alt='menu' />
  const searchIcon = <img src={SearchSVG} alt='search' />
  const style = headerStyle()
  return (
    <div className={style.outer}>
      <div className={style.mainheader}>
        <h1 className={style.title}>Enter Title Here</h1>
        <div className={style.separator} />
        <input className={style.searchbar} type='text' placeholder='Search Drink Name' />
      </div>
      <div className={style.controlbar}>
        <Button 
          icon={menuIcon}
          onClick={toggleSidebar} 
          className={style.hamburgerIcon} 
        />
        <Button 
          icon={searchIcon}
          onClick={toggleSearch} 
          className={style.searchIcon} 
        />
      </div>
    </div>
  )
}