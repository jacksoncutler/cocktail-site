import { useEffect, useRef, useState } from 'react'
import { Button } from 'components'
import MenuSVG from 'assets/menu.svg'
import SearchSVG from 'assets/search.svg'
import { headerStyle } from './style'

export const Header = ({ view, showSidebar, setShowSidebar }) => { 
  const [showSearch, setShowSearch] = useState(false)
  const [searchString, setSearchString] = useState('')
  const mobileSearchRef = useRef()
  useEffect(() => {
    if (showSearch === true) {
      const handler = (e) => {
        if (!mobileSearchRef.current.contains(e.target)) {
          setShowSearch(false)
        }
      }
      document.addEventListener('mousedown', handler)
      return () => document.removeEventListener('mousedown', handler)
    }
  }, [showSearch])

  const toggleSidebar = () => setShowSidebar(!showSidebar)
  const toggleSearch = () => setShowSearch(!showSearch)

  const renderMobileSearch = () => showSearch ? 
    <input 
      ref={mobileSearchRef}
      type='text' 
      placeholder='Search Drink Name' 
      value={searchString}
      onChange={e => setSearchString(e.target.value)}
      className={style.mobileSearch} 
      autoFocus 
    />
    :
    <Button 
      icon={searchIcon}
      onClick={toggleSearch} 
      className={style.searchIcon} 
    />

  const menuIcon = <img src={MenuSVG} alt='menu' />
  const searchIcon = <img src={SearchSVG} alt='search' />
  const style = headerStyle(view)
  return (
    <div className={style.outer}>
      <div className={style.mainheader}>
        <h1 className={style.title}>Enter Title Here</h1>
        <div className={style.separator} />
        <input 
          type='text' 
          placeholder='Search Drink Name' 
          value={searchString}
          onChange={e => setSearchString(e.target.value)}
          className={style.searchbar} 
        />
      </div>
      <div className={style.controlbar}>
        <Button 
          icon={menuIcon}
          onClick={toggleSidebar} 
          className={style.hamburgerIcon} 
        />
        { renderMobileSearch() }
      </div>
    </div>
  )
}