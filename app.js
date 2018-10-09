const studentList = [
  'Lisa',
  'Sarah',
  'Anne',
  'George',
  'Daniel',
  'Jionni',
  'Jennifer',
  'Tasha'
];

// Using the new DOM Manipulation library, do all of the following: 

// 1. Render all of the names in `studentList` individually in paragraph tags to the div with the class `content`.
let newList = [];

for(let i = 0; i < studentList.length; i++) {
  newList.push('<p>' + studentList[i] + '</p>');
  }
  $('.content').html(newList);

// 2. When the add button is pressed, use the `val` function to get the value of the user input and and add that name to the list. Re-render the list. 
$('#add').click(function(){
  newList.push('<p>' + $('#name').val() + '</p>');
  $('.content').html(newList);
});

// 3. When the search button is pressed, add the `blue` class to the `body` if the name that was input is in the studentList array.
$('#search').click(function(){
  for(let i = 0; i < newList.length; i++){
    if (newList[i] === ('<p>' + $('#name').val() + '</p>')){
      $('body').addClass('blue');
    }
    // else($('body').removeClass('blue'));
    }
});
    
// 4. When the delete button is pressed, delete the element from studentList that matches the name the user entered in the input field. Re-render the list.
$('#delete').click(function(){
  const inputName = ('<p>' + $('#name').val() + '</p>');
  const index = newList.indexOf(inputName);

  for(let i = 0; i < newList.length; i++){
    if (newList[i] === inputName) {
      newList.splice(index, 1);
    }
      $('.content').html(newList);

  }
});

// 5. Add a sort button that sorts the list and re-renders it.
$('#sort').click(function(){
  newList.sort();
$('.content').html(newList);
});

//  6. Add a clear button that clears the page when pressed.

$('#clear').click(function(){
  $('.content').empty();
});

// 7. Add a second input field and an update button. 
//    On button click, find the user with the name in the studentList 
//    that matches the value in the first input field and update it to 
//    the name in the second input field.

$('#update').click(function(){
  const inputName = ('<p>' + $('#name').val() + '</p>');
  const index = newList.indexOf(inputName);

  for(let i = 0; i < newList.length; i++){
    if (newList[i] === inputName) {
      newList.splice(index, 1,('<p>' + $('#newName').val() + '</p>') );
  }
  $('.content').html(newList);
}
});

// 8.  Adds a button that renders the original studentList.

$('#display').click(function(){ 
  let newList = [];
  for(let i = 0; i < studentList.length; i++) {
    newList.push('<p>' + studentList[i] + '</p>');
    }
    $('.content').html(newList/*.join("")*/);
  });

  // 9. Adds a button that adds the darkTheme class to the body.
  $('#darkTheme').click(function(){
    $('body').addClass('darkTheme');
  })

  // 10. Adds a button that restores the original theme to the body.
  $('#lightTheme').click(function(){
    $('body').removeClass('darkTheme');
  })