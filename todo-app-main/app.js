$(document).on("mouseenter", ".todo-list-item", function (e) {
  $(this).find(".delete").removeClass("hidden");
});
$(document).on("mouseleave", ".todo-list-item", function (e) {
  $(this).find(".delete").addClass("hidden");
});
$(document).on("change", 'input[type="checkbox"]', function () {
  checkboxWrapper = $(this).parent(".custom-checkbox");
  if (this.checked) checkboxWrapper.addClass("active");
  else checkboxWrapper.removeClass("active");
});
