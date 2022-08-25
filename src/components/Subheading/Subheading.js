import { subheadingStyle } from './style'

export const Subheading = () => {
  const style = subheadingStyle()
  return (
    <>
      <h2 className={style.label}>Liquor</h2>
      <div className={style.separator} />
    </>
  )
}