export const viewPortStyle = () => {
    const topHeaderMobile = 'top-[calc(theme(space.header-mobile)+theme(space.controlbar))]'
    const topHeaderTablet = 'sm:top-[calc(theme(space.header-tablet)+theme(space.controlbar-tablet))]'
    return {
        outer: `absolute ${topHeaderMobile} bottom-0 left-0 right-0 py-8 px-6 overflow-scroll ${topHeaderTablet} sm:px-8 md:top-header md:left-sidebar md:px-12`
    }
}