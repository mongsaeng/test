$(document).ready(function () {
  naviEvent();
  dropDownEvent();
  accordionEvent();
  popupCloseEvent();
  fileUploadEvent();
  accountTooltip();
  viewTabEvent();
  levelTabEvent();
});

$(window).scroll(function () {
  // $('.dropdown').removeClass('active');
  $(".tooltip-wrap").removeClass("active");
});

$(window).resize(function () {
  $("body").removeClass("scroll-lock");
  $(".dropdown").removeClass("active");
  $(".tooltip-wrap").removeClass("active");
  $(".header .navigation a").removeClass("collapse");
  $(".header .right-items, .header .navigation, .header .btn-mob-menu").removeClass("active");
});

function naviEvent() {
  const target = $(".header .navigation > li > a");
  const mobTarget = $(".header .btn-mob-menu");
  target.mouseover(function () {
    let offsetLeft = $(".header .navigation").offset().left;
    $(".header .navigation .depth2").css({
      paddingLeft: offsetLeft,
    });
    $(this).next(".depth2").addClass("active");
    $(this).parents("li").siblings().find(".depth2").removeClass("active");
  });
  $(".header .navigation .depth2").mouseleave(function () {
    $(this).removeClass("active");
  });

  $(".header .btn-mypage").mouseover(function () {
    $(".mypage-detail").addClass("hover");
  });
  $(".mypage-detail").mouseleave(function () {
    $(this).removeClass("hover");
  });

  // Mobile
  target.click(function () {
    $(this).toggleClass("collapse");
    $(this).parents("li").siblings().find("> a").removeClass("collapse");
  });
  mobTarget.click(function () {
    $(this).toggleClass("active");
    $(".header .right-items, .header .navigation").toggleClass("active");
    $("body").toggleClass("scroll-lock");
  });
  $(".header .btn-mypage").click(function () {
      $(".mypage-detail").toggleClass("active");
  });
}

function dropDownEvent() {
  // const target = $(".dropdown .dropdown-target");
  // const optItem = $(".dropdown .opt-item");
  // target.click(function () {
  //     $(this).parent().toggleClass("active");
  //     $(this).parents(".text-field-box").toggleClass("active");
  // });
  // optItem.click(function () {
  //     console.log($(this));
  //     const txt = $(this).text();
  //     $(this).parent().addClass("active").siblings().removeClass("active");
  //     $(this).parents(".dropdown").removeClass("active").find(target).text(txt);
  //     $(this).parents(".text-field-box").removeClass("active");
  // });
}

$(document).ready(function () {
  $(document).on("click", ".dropdown .dropdown-target", function (e) {
    $(e.target).parent().toggleClass("active");
    $(e.target).parents(".text-field-box").toggleClass("active");
  });

  $(document).on("click", ".dropdown .opt-item", function (e) {
    const txt = $(e.target).text();
    $(e.target).parent().addClass("active").siblings().removeClass("active");
    $(e.target).parents(".dropdown").removeClass("active").find(".dropdown-target").text(txt);
    $(e.target).parents(".text-field-box").removeClass("active");
  });
});

function accordionEvent() {
  const target = $(".accordion-item .inquiry-tit a");
  target.click(function () {
      $(this).parents(".accordion-item").toggleClass("active");
      $(this).parents(".accordion-item").find(".answer").slideToggle();
  });
}

function popupCloseEvent() {
  $(".popup .btn-pop-close").click(function () {
      $(this).parents(".popup").removeClass("active");
  });
}

function fileUploadEvent() {
  const target = $('.file-field-box input[type="file"]');
  target.on("change", function () {
      let fileVal = target.val().split("\\");
      let fileName = fileVal[fileVal.length - 1];
      $(this).parent().find(".text-field").val(fileName);
  });
}

function accountTooltip() {
  const target = $(".account-item .btn-tooltip");
  target.click(function () {
      let offsetLeft = $(this).offset().left;
      let offsetTop = $(this).offset().top;
      let scrollTop = $(window).scrollTop();
      $(this)
        .parent(".tooltip-wrap")
        .toggleClass("active")
        .find(".tooltip")
        .css({
            left: offsetLeft,
            top: offsetTop - scrollTop,
        });
  });
}

function viewTabEvent() {
  $(".view-tabs button").click(function () {
      let viewName = $(this).attr("name");
      $(this).parent().addClass("active").siblings().removeClass("active");
      $("#" + viewName)
        .addClass("active")
        .siblings()
        .removeClass("active");
  });
}

function levelTabEvent() {
  $(".step-box.level button").click(function () {
    let lvName = $(this).attr("name");
    $(this).siblings().removeClass('active');
    $(this).addClass("active").prevAll().addClass('active');
    $("#" + lvName)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });
}