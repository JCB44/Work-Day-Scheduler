// var location 
// var inputValue

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  function saveInput(){
  $(".saveBtn").click(function(){ 
    console.log(this)
  var location = $(this).parent().attr("id")
  var inputValue = $(this).closest('div').find('.description').val();
  localStorage.setItem(location, inputValue)
    console.log(inputValue);
    console.log(location)
  });
}

  function displaySaved(){
    var keys = Object.keys(localStorage)

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = localStorage.getItem(key);
      $("#" + key + " .description").val(value);
    } 
  }

  function colorUpdate(){

  }
  
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  saveInput()
  displaySaved()
  colorUpdate()
});
