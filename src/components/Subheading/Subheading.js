import { subheadingStyle } from './style'

export const Subheading = (props) => {
  const style = subheadingStyle(props)
  const { label, line, className } = props
  return (
    <div className={className}>
      <h2 className={style.label}>{label}</h2>
      { line ? <div className={style.separator} /> : <></> }
    </div>
  )
}