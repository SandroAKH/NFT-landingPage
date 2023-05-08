export const getScrollTop = (el, scrollTop = 0) => {
  if (el.previousSibling && el.previousSibling.id !== 'man') {
    return getScrollTop(el.previousSibling, scrollTop + el.previousSibling.scrollHeight);
  }

  return scrollTop;
};

export const navigate = (page, initiScroll = 0) => {
  const current = document.getElementById(page);
  const scrollTop = getScrollTop(current, initiScroll);

  window.scrollTo({
    top: scrollTop,
    left: 0,
    behavior: 'smooth'
  });
};