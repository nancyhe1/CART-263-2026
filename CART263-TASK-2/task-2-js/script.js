window.onload = setup;

/** function setup */
function setup(){
console.log("we are a go!")
/*** ALL ANWSERS TO BE ADDED IN THE ALLOCATED SPACE */
/*** START PART ONE ACCESS */ 
/* 1: all paragraph elements */
/***CODE */ console.log(document.querySelectorAll("p"));
/***OUTPUT: 
 * NodeList(9)
 * 0: p#1
 * 1: p#2.img-descript
 * 2: p#3.img-descript
 * 3: p#4.img-descript
 * 4: p#5.img-descript
 * 5: p#6.img-descript
 * 6: p#7.img-descript
 * 7: p#8.img-descript
 * 8: p#9.img-descriptlength: 9
 * [[Prototype]]: NodeList
 */


/*************************************** */
/* 2: only the first paragraph element */
/***CODE */ console.log(document.querySelector("p"));
/***OUTPUT: 
 * <p id="1">
 * "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perspiciatis blanditiis, et
    laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur ducimus 
    officiis non quasi officia sit veniam!
    </p>"
 */


/*************************************** */
/* 3: all elements with the class inner-container */
/***CODE */ console.log(document.querySelectorAll(".inner-container"));
/***OUTPUT: 
 * NodeList(8) [div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container]
0: div.inner-container
1: div.inner-container
2: div.inner-container
3: div.inner-container
4: div.inner-container
5: div.inner-container
6: div.inner-container
7: div.inner-container
length: 8
[[Prototype]: .NodeList
 */


/*************************************** */
/* 4: the last image element inside the element that has the class img-container */
/***CODE */ let imgContainers = document.querySelectorAll(".img-container");
            let lastImgContainer = imgContainers[imgContainers.length - 1];
            let lastImage = lastImgContainer.querySelector("img");
            console.log(lastImage);
/***OUTPUT: 
 * <img class="img-image" src="task-2-images/seventeen.png" />
 */


/*************************************** */
/* 5A: all h2 elements */
/* 5B: length of the list in 5A */
/* 5C: the text content of the first element in the list from 5A */
/***CODE */ console.log(document.querySelectorAll("h2"));
            console.log(document.querySelectorAll("h2").length);
            console.log(document.querySelector("h2").textContent);
/***OUTPUT: NodeList [h2]
 * 0: h2
 * length: 1
 * [[Prototype]]: NodeList
 * The header of this fancy page
 */


/*************************************** */
/* 6: the element with id name parent */
/***CODE */ console.log(document.getElementById("parent"));
/***OUTPUT: 
 * <section id="parent"> (...) </section>
 */

/*************************************** */
/*** END PART ONE ACCESS */ 


/*************************************** */
/*** START PART TWO MODIFY */ 
/*************************************** */
// /* 1: Select the first paragraph and replace the text within the paragraph... */
// /***CODE */ 
// let firstParagraph = document.querySelectorAll('p')[0];
// firstParagraph.textContent = `New text in paragraph one: text changed by Nancy He on the following date: ${new Date().toLocaleDateString()}`;
// /*************************************** */
// /* 2: Select all elements in the HTML that have the class name content-container
//  and change the background color ... of first and second ...*/
// /***CODE */
// let allContentContainers = document.querySelectorAll('.content-container');  // Select all content-container elements

// // Change the background color of the first content-container to orange
// if (allContentContainers[0]) {
//     allContentContainers[0].style.backgroundColor = 'orange';
// }

// // Change the background color of the second content-container to purple
// if (allContentContainers[1]) {
//     allContentContainers[1].style.backgroundColor = 'purple';
// }

// /*************************************** */
// /* 3: Change the src element of the first image element on the page to be ...
// /***CODE */
// let firstImage = document.querySelector('img');
// firstImage.src = 'task-2-images/seven.png';

// /*************************************** */
// /* 4: Select the third paragraph element on the page and 
// replace the content (within the paragraph) to be an h2 element which contains the text `TEST 123`
// /***CODE */
// let thirdParagraph = document.querySelectorAll('p')[2];
// thirdParagraph.innerHTML = '<h2>TEST 123</h2>';

// /*************************************** */
// /* 5: Select the fourth paragraph element on the page and 
// add to the existing content an h2 element containing the text `TEST 123`
// /***CODE */
// let fourthParagraph = document.querySelectorAll('p')[3];
// fourthParagraph.innerHTML += '<h2>TEST 123</h2>';

// /*************************************** */
// /* 6: Select the fifth paragraph element on the page and add to the existing content 
// an img element that holds `one.png`, and add the class newStyle to said paragraph element.
// /***CODE */
// const fifthParagraph = document.querySelectorAll('p')[4];
// fifthParagraph.innerHTML += '<img src="task-2-images/one.png" />';
// fifthParagraph.classList.add('newStyle');

// /*************************************** */
// /* 7: Add the following array variable: let colors = ['red','blue','green','orange'];, 
// then access all elements with class name inner-container and save to a variable called `innerContainers`. 
// Next, iterate over the colors array, and for each color: 
// assign the element from innerContainers variable with the same index 
// (i.e. colors[0] should be allocated to the first innerContainers element, colors[1] to the second, etc ...) 
// a background using that color.
// /***CODE */
// let colors = ['red', 'blue', 'green', 'orange'];
// const innerContainers = document.querySelectorAll('.inner-container');

// innerContainers.forEach((container, index) => {
//   if (index < colors.length) {  // Ensure we don't exceed the array length
//     container.style.backgroundColor = colors[index];
//   }
// });

/*************************************** */
/*** END PART TWO MODIFY */ 


/*************************************** */
/*** START PART THREE CREATE */ 
/*************************************** */
/* 1: NEW PARAGRAPHS */
/* 1A: Access all paragraph elements, and store the result in a variable called: allPTagsThree */
/* 1B: Create a function:function customCreateElement(parent){ //body } */
/* 1C:  In the body of customCreateElement create a new parargraph element*/
/* 1D:  Set the text of this element to be : `using create Element`*/
/* 1E:  Set the background of this paragraph element to be green */
/* 1F:  Set the color of the text in this paragraph element to be white */
/* 1G: Append this new element to the parent variable within the function. */
/* 1H: Iterate through the allPTagsThree array and call customCreateElement(), 
passing the current allPTagsThree element as the parent with each iteration.*/
/***CODE */
// const allPTagsThree = document.querySelectorAll('p');  // 1A: Access all paragraph elements

// // 1B: Create the function to dynamically add a new paragraph
// function customCreateElement(parent) {
//     // 1C: Create a new paragraph element
//     const newParagraph = document.createElement('p');
    
//     // 1D: Set the text of this paragraph
//     newParagraph.textContent = 'using createElement';
    
//     // 1E: Set the background of this paragraph element to green
//     newParagraph.style.backgroundColor = 'green';
    
//     // 1F: Set the color of the text to white
//     newParagraph.style.color = 'white';
    
//     // 1G: Append the new paragraph element to the parent
//     parent.appendChild(newParagraph);
// }

// // 1H: Iterate through each paragraph and call customCreateElement
// allPTagsThree.forEach((parentElement) => {
//     customCreateElement(parentElement);  // Passing each paragraph as parent
// });

/***EXPLANATION::
 * The code accesses all paragraph elements on the page and stores them in the `allPTagsThree` variable. 
 * It then defines a function `customCreateElement(parent)` that creates a new paragraph, 
 * sets its text to "using createElement", applies green background and white text color, 
 * and appends this new paragraph as a child of the passed parent element.
 * 
 * After defining the function, the code iterates over the `allPTagsThree` collection and calls the function
 * for each paragraph element. This results in the addition of a new green, white-text paragraph beneath each 
 * existing paragraph on the page.
 * 
 * For example, if there were 3 paragraphs initially, each would receive a new child paragraph 
 * with the text "using createElement".
 */


/*************************************** */
/* 2: GRID OF BOXES */
/* 2A: Create another new function: function customNewBoxCreate(parent){ //body }*/
/* 2B: In the body of customNewBoxCreate create a new div element, that has the class testDiv. 
/* 2C:Then append this new element to the parent variable within the function. 
/* 2D:Finally, return</code> this new element */
/* 2E:Create a nested for loop (for rows and columns) to iterate through 10 columns and 10 rows (just like the JS Review :)). 
    Call the customNewBoxCreate function, in order to generate a new div -> representing each cell in the grid. 
    Ensure that the parent element for each of these new divs is the element whose id is named `new-grid`*/
/* 2F: You will see at this point that the x,y position of the resulting divs makes no sense... 
    Fix this by doing the following: every time you call customNewBoxCreate() - save the current returned element 
    in a variable i.e. returnedDiv. 
    Set the style (left and top) to the of this element to 
    the necessary x and y position (use the counter variables in the for nested for loop to 
    calculate the new positions.
/* 2G: BONUS I: Make every div in the resulting grid in an even numbered row have white background 
    and otherwise let it have a background of purple.</li>
/* 2H: BONUS II: For every div in an even numbered row make it contain the text `EVEN`, 
    otherwise lat it have the content `ODD`.*/

/***CODE */
// function customNewBoxCreate(parent) {
//     const newDiv = document.createElement('div');  // 2B: Create a new div element
//     newDiv.classList.add('testDiv');  // 2B: Add the class testDiv to this div
//     parent.appendChild(newDiv);  // 2C: Append the new div to the parent element
//     return newDiv;  // 2D: Return the created div
// }

// /* 2E */

// const gridParent = document.getElementById('new-grid');  // Get the parent element by ID

// for (let row = 0; row < 10; row++) {  // Outer loop for rows (10 rows)
//     for (let col = 0; col < 10; col++) {  // Inner loop for columns (10 columns)
//         const returnedDiv = customNewBoxCreate(gridParent);  // Call the function to create a new div

//         // 2F: Set the style (left and top) to the necessary x and y positions
//         returnedDiv.style.position = 'absolute';  // Make each div position absolute
//         returnedDiv.style.left = `${col * 50}px`;  // Set left position based on column
//         returnedDiv.style.top = `${row * 50}px`;  // Set top position based on row

//         //2G: BONUS I: Make every div in an even numbered row have white background
//         //and otherwise let it have a background of cornflowerblue
//         if (row % 2 === 0) {
//             returnedDiv.style.backgroundColor = 'white';  // Even row -> white background
//         } else {
//             returnedDiv.style.backgroundColor = 'cornflowerblue';  // Odd row -> cornflowerblue background
//         }

//         //2H: BONUS II: For every div in an even numbered row, make it contain the text `EVEN`, 
//         //otherwise let it have the content `ODD`.
//         returnedDiv.textContent = (row % 2 === 0) ? 'EVEN' : 'ODD';  // Even row -> "EVEN", odd row -> "ODD"
//     }
// }

// /* 2I: Document how many elements are returned to the console when you write the code to select all elements 
//     that have the class name testDiv. Explain why the answer is what it is */

// const allTestDivs = document.querySelectorAll('.testDiv');  // Select all elements with the class 'testDiv'
// console.log(allTestDivs.length);  // Output the number of divs with the class 'testDiv'

/***EXPLANATION::
 * 
 * The `customNewBoxCreate()` function creates a new `div` with the class `testDiv`, appends it to the parent 
 * element (with the id `new-grid`), and returns the created div.
 * A nested `for` loop iterates through 10 rows and 10 columns. In each iteration, a new `div` is created and 
 * positioned using the `left` and `top` styles, based on the current row and column values.
 * For even-numbered rows, the div background color is set to **white**, while for odd-numbered rows, it is set 
 * to **cornflowerblue**.
 * Each div will display "EVEN" in even-numbered rows and "ODD" in odd-numbered rows.
 * The total number of div elements created is 100 (10 rows * 10 columns), and this is confirmed by logging the 
 * length of `allTestDivs`, which will output 100.
 * BONUS:
 *    - Divs in even rows have a white background with the text "EVEN".
 *    - Divs in odd rows have a cornflowerblue background with the text "ODD".
 */

/*************************************** */

/*************************************** */
/* 3: GRID OF BOXES II */

/* 3A: Create ANOTHER nested for loop - in order to generate a new grid ... 
    USE the same customNewBoxCreate function..., the only difference is that the parent element 
    for each of these new divs is the element whose id is `new-grid-three`. */
/* 3B: Then: write the code to check when a column is a multiple of 3 (no remainder), 
    when it is a column where the remainder is 1 or when the remainder is 2 ... 
    HINT:: look up the % operator.. */
/* 3C: Then for each of the above cases: give the new divs in the first case a background of red, 
        then the second a background of orange and the third yellow. */
/*  3D: Finally, let each div contain the text content representing the associated remainder 
    when dividing by three. */

/***CODE */
// const gridThreeParent = document.getElementById('new-grid-three');

// for (let row = 0; row < 10; row++) {
//     for (let col = 0; col < 10; col++) {

//         const returnedDiv = customNewBoxCreate(gridThreeParent);

//         // position the divs (same logic as grid 1)
//         returnedDiv.style.position = 'absolute';
//         returnedDiv.style.left = `${col * 50}px`;
//         returnedDiv.style.top = `${row * 50}px`;

//         // remainder logic
//         const remainder = col % 3;

//         if (remainder === 0) {
//             returnedDiv.style.backgroundColor = 'red';
//             returnedDiv.textContent = '0';
//         } else if (remainder === 1) {
//             returnedDiv.style.backgroundColor = 'orange';
//             returnedDiv.textContent = '1';
//         } else {
//             returnedDiv.style.backgroundColor = 'yellow';
//             returnedDiv.textContent = '2';
//         }
//     }
// }
/***EXPLANATION::
 * 
 * This section creates a second grid using the same customNewBoxCreate function.
 * The parent container for this grid is the element with the id `new-grid-three`.
 * 
 * A nested for loop is used to generate a 10x10 grid.
 * Each div is positioned using absolute positioning with left and top values
 * calculated from the column and row counters.
 * 
 * The modulo operator (%) is used on the column value:
 *  - If col % 3 === 0, the div is colored red and displays "0"
 *  - If col % 3 === 1, the div is colored orange and displays "1"
 *  - If col % 3 === 2, the div is colored yellow and displays "2"
 * 
 * This creates repeating vertical color columns based on remainders.
 * 
 */

/*************************************** */
/*** END PART THREE CREATE */ 
/*************************************** */
    

}