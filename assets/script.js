// var location 
// var inputValue

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  function saveInput(){
  $(".saveBtn").click(function(){ 
    // console.log(this)
  var location = $(this).parent().attr("id")
  var inputValue = $(this).closest('div').find('.description').val();
  localStorage.setItem(location, inputValue)
    // console.log(inputValue)
    // console.log(location)
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
      // console.log(timestamp)
      // console.log(currentHour)
  });
}
  function currentDate(){
    //will update every seccond but displaying seccond is not needed
    var now = dayjs().format('dddd MMMM DD, YYYY <br>' +'H:mm A') 
    $("#currentDate").empty()
    $("#currentDate").append(now)
    setTimeout(currentDate,1000)
    // console.log(now)
    }
    
    function clearAll(){
      $("#clearAll").click(function(){

        // \/\/\/\/ this would delete all local storage that exists

      //   var keys = Object.keys(localStorage)
      // for (var i = 0; i < keys.length; i++) {
      //   var key = keys[i];
      //   localStorage.setItem(key,"")
      
      localStorage.setItem(9,"")
      localStorage.setItem(10,"")
      localStorage.setItem(11,"")
      localStorage.setItem(12,"")
      localStorage.setItem(13,"")
      localStorage.setItem(14,"")
      localStorage.setItem(15,"")
      localStorage.setItem(16,"")
      localStorage.setItem(17,"")
      location.reload();
      }
      );

    
    console.log("clear")
  }
clearAll()
  
currentDate()
colorUpdate()
saveInput()
displaySaved()
});
