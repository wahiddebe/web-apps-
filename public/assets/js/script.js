function isEmpty(str) {
  return !str || str.length === 0;
}

window.onload = function () {
  var input = document.getElementsByTagName("input");
  var inputCount = input.length;
  for (var i = 0; i < inputCount; i++) {
    value = input[i].getAttribute("value");
    type = input[i].getAttribute("type");
    id = input[i].getAttribute("id");
    elemeti = $("#" + id);
    elemetigroup = $("#" + id + "-group");
    if (elemeti.hasClass("input")) {
      var label = $('label[for="' + id + '"]');
      console.log("ada");
    } else {
      var label = "";
      console.log("gaga");
    }
    // console.log(id, elemeti);
    elemeti.change(function () {
      if (isEmpty($(this).val()) || $(this).val() == null) {
        if ($(this).hasClass("input")) {
          $(this).removeClass("mb-0 position-relative w-auto");
          $(this).addClass("mb-2_4 position-absolute h-100 w-100");
          var labels = $('label[for="' + $(this).attr("id") + '"]');
          var elemetigroups = $("#" + $(this).attr("id") + "-group");
          console.log("ada");
        } else {
          var labels = "";
          var elemetigroups = "";
          console.log("gaga");
        }
        labels.removeClass("position-relative mt-0");
        elemetigroups.removeClass("opacity-1");
        labels.addClass("position-absolute");
        elemetigroups.addClass("opacity-0");
      } else {
        if ($(this).hasClass("input")) {
          $(this).removeClass("mb-2_4 position-absolute h-100 w-100");
          $(this).addClass("mb-0 position-relative w-auto");
          var labels = $('label[for="' + $(this).attr("id") + '"]');
          var elemetigroups = $("#" + $(this).attr("id") + "-group");

          console.log("ada");
        } else {
          var labels = "";
          var elemetigroups = "";

          console.log("gaga");
        }
        labels.removeClass("position-absolute");
        elemetigroups.removeClass("opacity-0");

        labels.addClass("position-relative mt-0");
        elemetigroups.addClass("opacity-1");
      }
    });
    elemeti.focus(function () {
      $(this).addClass("w-auto");
    });
    console.log(value, id, elemeti);
    console.log(isEmpty(value));
    if (isEmpty(value) || value == null) {
      label.addClass("position-absolute");
      if (elemeti.hasClass("input")) {
        elemeti.addClass("mb-2_4 position-absolute h-100 w-100");
        elemetigroup.addClass("opacity-0");
        console.log("ada");
      }
    } else {
      label.addClass("position-relative mt-0");
      if (elemeti.hasClass("input")) {
        elemeti.addClass("mb-0 position-relative w-auto");
        elemetigroup.addClass("opacity-1");
        console.log("ga");
      }
    }
  }
};
