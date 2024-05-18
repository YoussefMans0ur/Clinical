// document.body.addEventListener('click', function(event) {
//   if (event.target.classList.contains('toggle-sidebar-btn')) {
//     document.body.classList.toggle('toggle-sidebar');
//   }
// });

$(document).ready(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return $(el)
    } else {
      return $(el).first()
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      $(el).each(function () {
        $(this).on(type, listener);
      });
    } else {
      $(el).on(type, listener);
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    $(el).on('scroll', listener);
  }

  /**
   * Sidebar toggle
   */
  if (select('.toggle-sidebar-btn')) {
    on('click', '.toggle-sidebar-btn', function (e) {
      $('body').toggleClass('toggle-sidebar');
    });
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.each(function () {
      let navbarlink = $(this);
      if (!navbarlink.attr('href')) return;
      let section = select(navbarlink.attr('href'));
      if (!section.length) return;
      if (position >= section.offset().top && position <= (section.offset().top + section.outerHeight())) {
        navbarlink.addClass('active');
      } else {
        navbarlink.removeClass('active');
      }
    });
  };
  $(window).on('load', navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header');
  if (selectHeader.length) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.addClass('header-scrolled');
      } else {
        selectHeader.removeClass('header-scrolled');
      }
    };
    $(window).on('load', headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top');
  if (backtotop.length) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.addClass('active');
      } else {
        backtotop.removeClass('active');
      }
    };
    $(window).on('load', toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Initiate tooltips
   */
  $('[data-bs-toggle="tooltip"]').tooltip();

  /**
   * Initiate Quill editors
   */
  if (select('.quill-editor-default').length) {
    new Quill('.quill-editor-default', {
      theme: 'snow'
    });
  }

  if (select('.quill-editor-bubble').length) {
    new Quill('.quill-editor-bubble', {
      theme: 'bubble'
    });
  }

  if (select('.quill-editor-full').length) {
    new Quill(".quill-editor-full", {
      modules: {
        toolbar: [
          [{
            font: []
          }, {
            size: []
          }],
          ["bold", "italic", "underline", "strike"],
          [{
            color: []
          },
          {
            background: []
          }
          ],
          [{
            script: "super"
          },
          {
            script: "sub"
          }
          ],
          [{
            list: "ordered"
          },
          {
            list: "bullet"
          },
          {
            indent: "-1"
          },
          {
            indent: "+1"
          }
          ],
          ["direction", {
            align: []
          }],
          ["link", "image", "video"],
          ["clean"]
        ]
      },
      theme: "snow"
    });
  }

  /**
   * Initiate Bootstrap validation check
   */
  $('.needs-validation').on('submit', function (event) {
    let form = $(this);
    if (!form[0].checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.addClass('was-validated');
  });

  /**
   * Initiate Datatables
   */
  $('.datatable').each(function () {
    new simpleDatatables.DataTable($(this)[0], {
      perPageSelect: [5, 10, 15, ["All", -1]],
      columns: [{
        select: 2,
        sortSequence: ["desc", "asc"]
      },
      {
        select: 3,
        sortSequence: ["desc"]
      },
      {
        select: 4,
        cellClass: "green",
        headerClass: "red"
      }
      ]
    });
  });

  /**
   * Autoresize echart charts
   */
  const mainContainer = $('#main');
  if (mainContainer.length) {
    setTimeout(() => {
      new ResizeObserver(function () {
        $('.echart').each(function () {
          echarts.getInstanceByDom($(this)[0]).resize();
        });
      }).observe(mainContainer[0]);
    }, 200);
  }
});
