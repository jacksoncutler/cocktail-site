export const subheadingStyle = ({ size, bold, bg }) => {
    const sizeClass = size === 'lg' ? 'text-2xl ' : 'text-xl '
    const boldClass = bold ? 'font-bold': ''
    const colorClass = bg === 'grey' ? 'text-grey-900' : 'text-grey-800 '
    const lineColorClass = bg === 'grey' ? 'border-grey-400 ' : 'border-grey-300 '
    return {
        label: 'pb-1 ' + sizeClass + boldClass + colorClass,
        separator: 'border border-solid ' + lineColorClass,
    }
}