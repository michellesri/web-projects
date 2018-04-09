// problem: user interaction doesn't profived desired results
// solution: add interactivity so the user can manage daily tasks.

//add a new task
  //when button is pressed
  //create a new list item with the text from #new-task:
    //input checkbox
    //label
    //input text
    //button.edit
    //button.delete
    //each element needs to be appended.

//edit an exisiting task
  //when the edit button is pressed
    //if the class of the parent is editMode
      //switch from .editMode
      //label text become the input's value
    //else
      //switch to .editMode
      //input value becomes the label's text

      //toggle .editMode on the parent

//delete an exisiting task
  //when the delete button is pressed
    //remove the parent list item from the ul

//mark a task as complete
  //when the checkbox is checked
  //append the task list item to the #completed-tasks

//mark a task as incomplete
  //when the checkbox is unchecked
  //append the task list itme to the #incomplete-tasks
