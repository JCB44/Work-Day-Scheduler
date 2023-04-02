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
    console.log(inputValue)
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
  var currentHour = dayjs().format('H');
  
  $(".time-block").each((index, element) => {
    let timestamp = parseInt(element.id);
      
    switch (true) {
      case timestamp ==  currentHour:
        $(element).toggleClass('present')
        break
       case timestamp < currentHour:
         $(element).toggleClass('past')
        break
      case timestamp > currentHour:
        $(element).toggleClass('future')
        break;
      default:
        break;
     }
      console.log(timestamp)
      console.log(currentHour)
  });
}
  
  
  
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

colorUpdate()
saveInput()
displaySaved()
  
});
