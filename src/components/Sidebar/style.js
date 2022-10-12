export const sidebarStyle = (showSidebar) => {
    const show = showSidebar ? 'left-0' : '-left-sidebar'
    return {
        outer: ['z-30 absolute top-header bottom-0 w-sidebar \
            overflow-scroll px-7 py-8 bg-grey-100 shadow-lg text-grey-900 md:left-0', show].join(' ')
    }
}