import { useState } from 'react'
import { MenuView } from 'components'
import { DrinkView } from 'components'

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
  return renderView()
}