import { useState } from 'react'
import { MenuView } from 'components'
import { DrinkView } from 'components'
import { viewPortStyle } from './style'

export const ViewPort = ({ view, changeView }) => {
  const [drink, setDrink] = useState()

  const selectDrink = (id) => { 
    setDrink(id)
    changeView()
  }
  
  const renderView = () => {
    return view === 'menu' ?
      <MenuView 
        select={selectDrink}
      />
      :
      <DrinkView 
        drinkId={drink}
      />
  }

  const style = viewPortStyle()
  return (
    <div className={style.outer}>
      { renderView() }
    </div>
  )
}