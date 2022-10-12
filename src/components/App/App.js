import { useState } from 'react'
import { Header } from 'components'
import { Sidebar } from 'components'
import { ViewPort } from 'components'

export const App = () => {
  const [view, setView] = useState('menu')
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <>
      <Header
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
      <Sidebar 
        view={view} 
        returnToSelection={ () => setView('menu') } 
        showSidebar={showSidebar}
      />
      <ViewPort 
        view={view}
        changeView={ () => setView('drink') }
      />
    </>
  )
}