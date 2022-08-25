import { Subheading } from 'components'
import { menuViewStyle } from './style'

export const MenuView = () => {
  const style = menuViewStyle()
  const placeholders = [...Array(101).keys()]
  return (
    <div className={style.outer}>
      <Subheading label='Bourbon' />
      <div className={style.section}>
        {
          placeholders.map(n => { return <div className='h-thumbnail w-full bg-grey-100'>{n}</div> })
        }
      </div>
    </div>
  )
}