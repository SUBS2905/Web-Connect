$(".messages").animate({ scrollTop: $(document).height() }, "fast");

$("#profile-img").click(function () {
  $("#status-options").toggleClass("active");
});

$(".expand-button").click(function () {
  $("#profile").toggleClass("expanded");
  $("#contacts").toggleClass("expanded");
});

$("#status-options ul li").click(function () {
  $("#profile-img").removeClass();
  $("#status-online").removeClass("active");
  $("#status-away").removeClass("active");
  $("#status-busy").removeClass("active");
  $("#status-offline").removeClass("active");
  $(this).addClass("active");

  if ($("#status-online").hasClass("active")) {
    $("#profile-img").addClass("online");
  } else if ($("#status-away").hasClass("active")) {
    $("#profile-img").addClass("away");
  } else if ($("#status-busy").hasClass("active")) {
    $("#profile-img").addClass("busy");
  } else if ($("#status-offline").hasClass("active")) {
    $("#profile-img").addClass("offline");
  } else {
    $("#profile-img").removeClass();
  }

  $("#status-options").removeClass("active");
});

const socket = io("http://localhost:3000");
socket.on("connection");

function sentMessage() {
  message = $(".message-input input").val();
  if ($.trim(message) == "") {
    return false;
  }
  $('<li class="sent"><p>' + message + "</p></li>").appendTo($(".messages ul"));
  $(".message-input input").val(null);
  $(".contact.active .preview").html("<span>You: </span>" + message);
  $(".messages").animate({ scrollTop: $(document).height() }, "fast");
  socket.emit("sent_message", message);
}

function receivedMessage(data) {
  $('<li class="replies"><p>' + data + "</p></li>").appendTo($(".messages ul"));
  $(".contact.active .preview").html(data);
  $(".messages").animate({ scrollTop: $(document).height() }, "fast");
}

$(".submit").click(function () {
  sentMessage();
});

$(window).on("keydown", function (e) {
  if (e.which == 13) {
    sentMessage();
    return false;
  }
});

socket.on("sent_message", (data) => {
  receivedMessage(data);
});
$("#contacts ul li").click(function () {
  $(".contact").removeClass("active");
  $(this).addClass("active");
});

function replace() {
  const main = document.getElementById("changei");

  main.innerHTML = "Anurag Kumar";
  document.getElementById("activem").src = "img/anurag.png";
}
function replace1() {
  const main = document.getElementById("changei");
  main.innerHTML = "Ansh Chauhan";
  document.getElementById("activem").src = "img/ansh.png";
}
function replace2() {
  const main = document.getElementById("changei");
  main.innerHTML = "Anant Dubey";
  document.getElementById("activem").src = "img/anant.png";
}
function replace3() {
  const main = document.getElementById("changei");
  main.innerHTML = "Subhransu Majhi";
  document.getElementById("activem").src = "img/subs.png";
}
