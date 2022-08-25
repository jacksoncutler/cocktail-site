export const MenuView = () => {
  return (
    <div className='absolute top-header bottom-0 left-sidebar grid grid-cols-2 overflow-scroll'>
      <div className='border'>{ 'hello '.repeat(1000) }</div>
      <div className='border'>{ 'world '.repeat(1000) }</div>
    </div>
  )
}