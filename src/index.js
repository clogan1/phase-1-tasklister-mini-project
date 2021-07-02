
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#create-task-form').addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)
    let li = document.createElement('li') //create li
    li.textContent = e.target[0].value + ' ' + e.target[1].value
    switch(e.target[1].value){
      case "high":
        li.style.color = 'red'
        break;
      case "medium":
        li.style.color = 'orange'
        break;
      case "low":
        li.style.color = 'green'
        break;
    }
    //add text content from user input 
    console.log(li)
    //append li to ul

  //delete function
  //add a button to each li
  
  let btn = document.createElement('button');
  btn.textContent = "x"

  let editButton = document.createElement('button');
  editButton.textContent = "edit"

  btn.addEventListener('click', (e) => {
    document.querySelector('#tasks').removeChild(li);
  })
    document.querySelector('#create-task-form').reset()
  
    li.append(btn, editButton);
    document.querySelector('#tasks').append(li);
  
  
  editButton.addEventListener('click', (e) => {
      let editTask = prompt("Edit the task description:", li.textContent);
      li.textContent = editTask
      li.append(btn, editButton);
  
  })

 
})


 

  //add event listener to the button that will parent.removeChild the li

  // let ul = document.querySelector('#tasks')
  // console.log(ul)

});

/*
make a tasks array
each task has name, priority
add them to the array instead of the ul
order the array?!?!?!  array.sort https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
then render the ul looping though the array
*/

//click

//click on li 
//event listener ('click', function --> pull up a prompt alert with an input field, default to what they had put, user can edit, new text replaces the li's tex)

// prompt W3 school: https://www.w3schools.com/jsref/met_win_prompt.asp 