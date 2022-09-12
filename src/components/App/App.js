import { useState } from 'react'
import { Header } from 'components'
import { Sidebar } from 'components'
import { ViewPort } from 'components'

export const App = () => {
  const [view, setView] = useState('menu')
  return (
    <>
      <Header />
      <Sidebar 
        view={view} 
        returnToSelection={ () => setView('menu') } 
      />
      <ViewPort 
        view={view}
        changeView={ () => setView('drink') }
      />
    </>
  )
}