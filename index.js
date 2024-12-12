// TODO: this file! :)
document.addEventListener("DOMContentLoaded", function () {
    const numberInput = document.getElementById("numberInput");
    const addButton = document.getElementById("addButton");
    const sort1Button = document.getElementById("sort1Button");
    const sortAllButton = document.getElementById("sortAllButton");
    const numberBankList = document.getElementById("numberBankList");
    const oddList = document.getElementById("oddList");
    const evenList = document.getElementById("evenList");
  
    // Bank holds the numbers
    let numberBank = [];
  
    // update the number bank display
    function updateNumberBank() {
      numberBankList.innerHTML = ''; // Clear the current list
      numberBank.forEach((num) => {
        const li = document.createElement("li");
        li.textContent = num;
        numberBankList.appendChild(li);
      });
    }
  
    //  updates the odd and even lists
    function updateOddEven() {
      oddList.innerHTML = '';
      evenList.innerHTML = '';
  
      const oddNumbers = numberBank.filter(num => num % 2 !== 0);
      const evenNumbers = numberBank.filter(num => num % 2 === 0);
  
      oddNumbers.forEach((num) => {
        const li = document.createElement("li");
        li.textContent = num;
        oddList.appendChild(li);
      });
  
      evenNumbers.forEach((num) => {
        const li = document.createElement("li");
        li.textContent = num;
        evenList.appendChild(li);
      });
    }
  
    // Event listener for adding a number to the number bank
    addButton.addEventListener("click", function () {
      const enteredNumber = numberInput.value.trim();
      const number = Number(enteredNumber);
  
      // Validate if the entered value is a number
      if (!isNaN(number) && enteredNumber !== "") {
        numberBank.push(number);
        numberInput.value = ''; // Clear the input field
        updateNumberBank(); // Update the number bank display
      } else {
        alert("Please enter a valid number.");
      }
    });
  
    // Event listener for sorting the first number into odd or even category
    sort1Button.addEventListener("click", function () {
      if (numberBank.length > 0) {
        const number = numberBank.shift(); // Remove the first number
        if (number % 2 === 0) {
          evenList.innerHTML += `<li>${number}</li>`;
        } else {
          oddList.innerHTML += `<li>${number}</li>`;
        }
        updateNumberBank(); // Update the number bank display
      } else {
        alert("The number bank is empty.");
      }
    });
  
    // sorting numbers into odd or even categories
    sortAllButton.addEventListener("click", function () {
      if (numberBank.length > 0) {
        oddList.innerHTML = '';
        evenList.innerHTML = '';
  
        // Sort all numbers into odd and even categories
        numberBank.forEach((num) => {
          if (num % 2 === 0) {
            evenList.innerHTML += `<li>${num}</li>`;
          } else {
            oddList.innerHTML += `<li>${num}</li>`;
          }
        });
  
        // Clear the number bank after sorting
        numberBank = [];
        updateNumberBank(); // Update the number bank display (will show empty list now)
      } else {
        alert("The number bank is empty.");
      }
    });
  });
