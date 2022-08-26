import { subheadingStyle } from './style'

export const Subheading = ({ label, size }) => {
  const style = subheadingStyle(size)
  return (
    <>
      <h2 className={style.label}>{ label }</h2>
      <div className={style.separator} />
    </>
  )
}