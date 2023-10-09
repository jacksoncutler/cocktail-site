export const viewPortStyle = (view) => {
  const topHeaderMobile =
    view === 'menu'
      ? 'top-[calc(theme(space.header-mobile)+theme(space.controlbar))]'
      : 'top-header-mobile';
  const topHeaderTablet =
    view === 'menu'
      ? 'sm:top-[calc(theme(space.header-tablet)+theme(space.controlbar-tablet))]'
      : 'sm:top-header-tablet';
  return {
    outer: `absolute ${topHeaderMobile} bottom-0 left-0 right-0 py-8 px-6 overflow-scroll ${topHeaderTablet} sm:px-8 md:top-header md:left-sidebar md:px-12`,
  };
};
