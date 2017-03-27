var lastStickyScroll = 0;
var stickySticky = function(sticky) {
  var $window = $(window),
      float = sticky.float ? sticky.float : false,
      position = float ? 'position-absolute' : 'position-relative',
      $sidebar = $(sticky.sidebar),
      $footer =  $(sticky.footer),
      footerHeight = $footer.outerHeight(),
      sidebarHeight = $sidebar.outerHeight(true),
      headerStickyHeight = sticky.headerStickyHeight,
      windowHeight = $window.height(),
      stopBeforeFooter = sticky.stopBeforeFooter,
      footerTop = $footer.length ? $footer.offset().top : document.body.scrollHeight,
      footerTop = footerTop - sticky.stopBeforeFooter,
      sidebarTop = $sidebar.offset().top,
      scrollTop = $window.scrollTop(),
      scrollBottom = windowHeight + scrollTop,
      topMargin = sticky.topMargin,
      isSidebarScrollable = windowHeight < headerStickyHeight + sidebarHeight,
      sidebarRelativeTop = float ? sidebarTop : sidebarTop - topMargin,
      sidebarFloatingTop = sidebarTop - headerStickyHeight,
      sidebarFloatingBottom = sidebarTop + sidebarHeight,
      sidebarTopOnFooterMeet = float ? footerTop - sidebarHeight : footerTop - sidebarHeight - topMargin;

  if (scrollTop > lastStickyScroll) {
    // downscroll
    if (scrollBottom > sidebarFloatingBottom && scrollBottom < footerTop && isSidebarScrollable) {
      $sidebar
        .addClass('fixed-bottom')
        .removeClass(position + ' fixed-top')
        .css({
          top : 'auto',
          bottom : 0
        });
    }
    if ($sidebar.hasClass('fixed-top') && scrollTop >= sidebarRelativeTop && isSidebarScrollable) {
      $sidebar
        .addClass(position)
        .removeClass('fixed-bottom fixed-top')
        .css({
          top : sidebarRelativeTop,
          bottom : 'auto'
        });
    }
    if (scrollBottom >= footerTop && sidebarFloatingBottom >= footerTop) {
      $sidebar
        .addClass(position)
        .removeClass('fixed-top fixed-bottom')
        .css({
          top : sidebarTopOnFooterMeet,
          bottom : 'auto'
        });
    }
    if (!isSidebarScrollable && scrollTop >= topMargin - headerStickyHeight && scrollBottom <= footerTop) {
      $sidebar
        .addClass('fixed-top')
        .removeClass(position + ' fixed-bottom')
        .css({
          top : headerStickyHeight,
          bottom : 'auto'
        });
    }
  } else {
    //upscroll
    if (scrollTop < sidebarFloatingTop) {
      $sidebar
        .addClass('fixed-top')
        .removeClass(position + ' fixed-bottom')
        .css({
          top : headerStickyHeight,
          bottom : 'auto'
        });
    }
    if ($sidebar.hasClass('fixed-bottom') && scrollBottom <= sidebarFloatingBottom && isSidebarScrollable) {
      $sidebar
        .addClass(position)
        .removeClass('fixed-top fixed-bottom')
        .css({
          top : sidebarRelativeTop,
          bottom : 'auto'
        });
    }
    if (scrollTop < topMargin - headerStickyHeight) {
      $sidebar
        .addClass(position)
        .removeClass('fixed-top fixed-bottom')
        .css({
          top : float ?  topMargin : 0,
          bottom : 'auto'
        });
    }
  }
  lastStickyScroll = scrollTop;
};