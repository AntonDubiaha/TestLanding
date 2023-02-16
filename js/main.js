window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabs_item");
  const playBtn = document.querySelector("#playVideo");
  const video = document.querySelector("#video");
  // scripts for tabs
  tabs.forEach((clickTab) => {
    clickTab.addEventListener("click", () => {
      tabs.forEach((otherTab) => {
        if (
          otherTab === clickTab &&
          otherTab.classList.contains("tabs_item_active")
        ) {
          otherTab.classList.remove("tabs_item_active");
        } else if (
          otherTab === clickTab &&
          !otherTab.classList.contains("tabs_item_active")
        ) {
          otherTab.classList.add("tabs_item_active");
        } else {
          otherTab.classList.remove("tabs_item_active");
        }
      });
    });
  });
  // scripts for video
  playBtn.addEventListener("click", function () {
    video.play();
    video.setAttribute("controls", "controls");
    playBtn.style.display = "none";
  });
  video.addEventListener("ended", function () {
    this.src = this.src;
    playBtn.style.display = "block";
    video.removeAttribute("controls");
  });
  $(".carousel").slick({
    autoplay: true,
    autoplayspeed: 10000,
    nextArrow:
      '<div class="carousel_arrow carousel_next"><i class="fa-solid fa-chevron-right"></i></div>',
    prevArrow:
      '<div class="carousel_arrow carousel_prev"><i class="fa-solid fa-chevron-left"></i></div>',
  });
  $("#buyNowBtn").on("click", popupOpen);
  $("#TryBtn").on("click", popupOpen);
  $(".fa-xmark").on("click", () => {
    $(".popup").removeClass("popup_active");
    $("body").css("overflow", "visible");
  });
  function popupOpen() {
    $(".popup").addClass("popup_active");
    $(".popup_done").hide();
    $(".popup_wrap").show();
    $("body").css("overflow", "hidden");
  }
  // function for smooth scrolling
  //   $("a[href*='#']").on("click", function(e){
  //     var anchor = $(this);
  //     $('html, body').stop().animate({
  //       scrollTop: $(anchor.attr('href')).offset().top
  //     }, 777);
  //     e.preventDefault();
  //     return false;
  //   });

  // Sending the form data and displaying a notification of successful sending
  $(".form").submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "form.php",
      data: $(this).serialize(),
    }).done(function () {
      $(this).find("input").val("");
      $("form").trigger("reset");
      $(".popup").addClass("popup_active");
      $(".popup_wrap").hide();
      $(".popup_done").show();
    });
    return false;
  });
});

// function for change color progress items
function change_business_item() {
  document.getElementById("business_item").style.backgroundColor = "#b388ff";
  document.getElementById("fa-building").style.color = "#b388ff";
  document.getElementById("install_item").style.backgroundColor = "#80d8ff";
  document.getElementById("fa-user").style.color = "#80d8ff";
}
function rechange_business_item() {
  document.getElementById("business_item").style.backgroundColor = "#80d8ff";
  document.getElementById("fa-building").style.color = "#80d8ff";
  document.getElementById("install_item").style.backgroundColor = "#b388ff";
  document.getElementById("fa-user").style.color = "#b388ff";
}

function change_download_item() {
  document.getElementById("download_item").style.backgroundColor = "#ea80fc";
  document.getElementById("fa-download").style.color = "#ea80fc";
  document.getElementById("users_item").style.backgroundColor = "#82b1ff";
  document.getElementById("fa-crown").style.color = "#82b1ff";
}
function rechange_download_item() {
  document.getElementById("download_item").style.backgroundColor = "#82b1ff";
  document.getElementById("fa-download").style.color = "#82b1ff";
  document.getElementById("users_item").style.backgroundColor = "#ea80fc";
  document.getElementById("fa-crown").style.color = "#ea80fc";
}

function change_install_item() {
  document.getElementById("install_item").style.backgroundColor = "#80d8ff";
  document.getElementById("fa-user").style.color = "#80d8ff";
  document.getElementById("business_item").style.backgroundColor = "#b388ff";
  document.getElementById("fa-building").style.color = "#b388ff";
}
function rechange_install_item() {
  document.getElementById("install_item").style.backgroundColor = "#b388ff";
  document.getElementById("fa-user").style.color = "#b388ff";
  document.getElementById("business_item").style.backgroundColor = "#80d8ff";
  document.getElementById("fa-building").style.color = "#80d8ff";
}

function change_users_item() {
  document.getElementById("users_item").style.backgroundColor = "#82b1ff";
  document.getElementById("fa-crown").style.color = "#82b1ff";
  document.getElementById("download_item").style.backgroundColor = "#ea80fc";
  document.getElementById("fa-download").style.color = "#ea80fc";
}
function rechange_users_item() {
  document.getElementById("users_item").style.backgroundColor = "#ea80fc";
  document.getElementById("fa-crown").style.color = "#ea80fc";
  document.getElementById("download_item").style.backgroundColor = "#82b1ff";
  document.getElementById("fa-download").style.color = "#82b1ff";
}

// window.addEventListener("DOMContentLoaded", () => {
//   const tabs = document.querySelectorAll(".fa-sort-down");
//   tabs.forEach(elem => {
//       elem.addEventListener("click", () => {
//           tabs.forEach(otherItem => {
//               if (otherItem.classList.contains("fa-sort-down_active")) {
//                   otherItem.classList.remove("fa-sort-down_active");
//               }
//           })
//           elem.classList.add("fa-sort-down_active")
//       });
//   });
// });
