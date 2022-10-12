export const sidebarStyle = (showSidebar) => {
    const show = showSidebar ? 'left-0' : '-left-sidebar'
    return {
        outer: ['z-30 absolute top-header bottom-0 w-sidebar \
            overflow-scroll px-7 py-8 text-grey-900 shadow-lg bg-mobile-sidebar backdrop-blur md:bg-grey-100 md:left-0', show].join(' ')
    }
}