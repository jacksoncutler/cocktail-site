export const sidebarStyle = (showSidebar) => {
    const showBar = showSidebar ? 'translate-x-full' : ''
    const showBackground = showSidebar ? 'opacity-80 translate-x-sidebar-mobile' : 'opacity-0 pointer-events-none'
    return {
        sidebar: ['z-30 absolute top-header bottom-0 -left-sidebar-mobile w-sidebar-mobile overflow-scroll px-7 py-8 text-grey-900 shadow-lg bg-sidebar-mobile backdrop-blur transition duration-350 ease-out md:translate-x-0 md:duration-200 md:ease-linear md:w-sidebar md:bg-grey-100 md:left-0', showBar].join(' '),
        background: ['z-30 absolute top-header bottom-0 left-0 right-0 p-2 bg-black transition duration-350 ease-out md:translate-x-0 md:invisible', showBackground].join(' '),
    }
}