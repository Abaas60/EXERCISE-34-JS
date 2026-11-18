// ### **Exercise 4: Adding and Removing Elements**

// - **Task:** Create two buttons—one to add a new list item to a list and another to remove the last item from the list. Implement the `addItem` and `removeItem` functions as shown in the example.


const studentList = document.querySelector('#student-list')

function addItem () {

  // creating new elemet

  const newItem = document.createElement('li')

  newItem.textContent = ("New Student")

  studentList.appendChild(newItem)
}


function removeItem () {

  if(studentList.lastChild) {
    studentList.removeChild(studentList.lastChild)
  } else {
    alert("waa lagu kala baxay")
  }
  
}