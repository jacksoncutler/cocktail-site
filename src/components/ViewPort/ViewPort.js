import { useState } from 'react'
import { MenuView } from 'components'
import { DrinkView } from 'components'
import { viewPortStyle } from './style'

export const ViewPort = ({ view, changeView, returnToSelection }) => {
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
        returnToSelection={returnToSelection}
      />
  }

  const style = viewPortStyle(view)
  return (
    <div className={style.outer}>
      { renderView() }
    </div>
  )
}