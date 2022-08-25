import { subheadingStyle } from './style'

export const Subheading = ({ label }) => {
  const style = subheadingStyle()
  return (
    <>
      <h2 className={style.label}>{ label }</h2>
      <div className={style.separator} />
    </>
  )
}