setup_B();
/** THEME: CHAOS  
 * Team B: Nancy, Yejin (Aurora), Jake
*/
function setup_B() {
  console.log("in b");
  /**************************************************** */
  //get the buttons
  activateButtons(`#TEAM_B`, "ani_canvB",aniA,aniB,aniC,aniD);

  /**************** ANI A ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN A INSIDE HERE */
  /**************** ANI A ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: create a creative, visual pattern using text, divs as shapes, images ...
   * 2: add in mouseclick event listener(s) somewhere to make the sketch interactive
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function  -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/
   
  function aniA(parentCanvas) {
    console.log("in ani-A -teamB");
  }


  /****************ANI B ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN B INSIDE HERE */
  /****************ANI B ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:).
   * 1: create a creative, visual pattern using text, divs as shapes, images ... 
   * 2: add in mouseover event listener(s) somewhere to make the sketch interactive
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

function aniB(parentCanvas) {
    console.log("in ani-B -teamB");

    // Get the rendered bounding box of the parent canvas (width and height)
    let boundingBoxParent = parentCanvas.getBoundingClientRect();
    console.log(boundingBoxParent);  // Logs the bounding box (position and dimensions)

    // Array to hold the circles (later transformed into rectangles)
    let circles = [];

    // Create random circles and place them on the canvas
    function createRandomCircles() {
        // Number of circles to create
        const numCircles = 10;

        for (let i = 0; i < numCircles; i++) {
            const circle = document.createElement("div");

            // Randomize circle size and position (ensuring they stay inside the parent canvas)
            const size = Math.floor(Math.random() * 50) + 20;  // Random size between 20px and 70px
            const xPos = Math.floor(Math.random() * (boundingBoxParent.width - size));
            const yPos = Math.floor(Math.random() * (boundingBoxParent.height - size));

            // Set styles for the circle
            circle.style.position = "absolute";
            circle.style.left = `${xPos}px`;
            circle.style.top = `${yPos}px`;
            circle.style.width = `${size}px`;
            circle.style.height = `${size}px`;
            circle.style.borderRadius = "50%";  // Circle shape
            circle.style.backgroundColor = getRandomColor();  // Random color for circle
            circle.classList.add("TEAM_B_ANI_B_Circle"); // Custom class for team B

            // Add mouseover event listener to each circle for individual transformation
            circle.addEventListener("mouseover", () => {
                // Change shape to rectangle on mouseover
                circle.style.borderRadius = "0";  // Remove circular border radius

                // Change size randomly (keep the width bigger than height for rectangles)
                const newWidth = Math.floor(Math.random() * 100) + 50;  // Random width between 50px and 150px
                const newHeight = Math.floor(Math.random() * 50) + 30;  // Random height between 30px and 80px

                // Ensure the rectangles stay within the bounds of the canvas
                const maxX = boundingBoxParent.width - newWidth;
                const maxY = boundingBoxParent.height - newHeight;

                const newX = Math.min(Math.floor(Math.random() * (maxX)), maxX);
                const newY = Math.min(Math.floor(Math.random() * (maxY)), maxY);

                circle.style.left = `${newX}px`;
                circle.style.top = `${newY}px`;

                // Change the background color to a new random color
                circle.style.backgroundColor = getRandomColor();
            });

            // Add the circle to the canvas
            parentCanvas.appendChild(circle);

            // Add the circle to the circles array
            circles.push(circle);
        }
    }

    // Helper function to generate random colors
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Mouseleave event to reset the shape of the circles
    parentCanvas.addEventListener("mouseleave", () => {
        circles.forEach(circle => {
            // Reset to circle shape when mouse leaves the canvas
            circle.style.borderRadius = "50%";

            // Reset size to a random size
            const newSize = Math.floor(Math.random() * 50) + 20;  // Random size between 20px and 70px
            circle.style.width = `${newSize}px`;
            circle.style.height = `${newSize}px`;

            // Reset the background color
            circle.style.backgroundColor = getRandomColor();
        });
    });

    // Call to create the random circles when the animation starts
    createRandomCircles();
}


  function aniC(parentCanvas) {
      console.log("in ani-C -teamB");
      let canvasC = document.querySelector("#ani_canvB_C");

    /*** THIS IS THE CALLBACK FOR KEY DOWN (* DO NOT CHANGE THE NAME *..) */
    windowKeyDownRef = function (e) {
      // KeyDown makes squares
      
      let newDot = document.createElement('div');
      canvasC.appendChild(newDot);
      newDot.style.backgroundColor = "rgb(" + e.which + ", " + e.which + ", " + e.which + ")";
      let size = Math.floor(Math.random() * 70);
      newDot.style.width = size + "px";
      newDot.style.height = size + "px";
      newDot.style.position = "absolute";
      newDot.style.left = (Math.floor(Math.random() * canvasC.offsetWidth) - size/2) + "px";
      newDot.style.top = (Math.floor(Math.random() * canvasC.offsetHeight) - size/2) + "px";
      newDot.style.rotate = Math.floor(Math.random() * 360) + "deg";
    };

    /*** THIS IS THE CALLBACK FOR KEY UP (*DO NOT CHANGE THE NAME..) */
    windowKeyUpRef = function (e) {
      //KeyUp makes circles

      let newDot = document.createElement('div');
      canvasC.appendChild(newDot);
      newDot.style.backgroundColor = "rgb(" + e.which + ", " + e.which + ", " + e.which + ")";
      let size = Math.floor(Math.random() * 40);
      newDot.style.width = size + "px";
      newDot.style.height = size + "px";
      newDot.style.position = "absolute";
      newDot.style.left = (Math.floor(Math.random() * canvasC.offsetWidth) - size/2) + "px";
      newDot.style.top = (Math.floor(Math.random() * canvasC.offsetHeight) - size/2) + "px";
      newDot.style.rotate = Math.floor(Math.random() * 360) + "deg";
      newDot.style.borderRadius = "500px";
    };
    //DO NOT REMOVE
    window.addEventListener("keydown", windowKeyDownRef);
    window.addEventListener("keyup", windowKeyUpRef);
  }

  /****************ANI D************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN D INSIDE HERE */
  /****************ANI D************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:).
   * 1: create a creative, visual pattern using text, divs as shapes, images ...
   * 2: add in animation using requestAnimationFrame somewhere to make the sketch animate :)
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/
   function aniD(parentCanvas) {
      console.log("in ani-D -teamB");
      let canvasD = document.querySelector("#ani_canvB_D");

      setInterval(function() {
        let newCircle = document.createElement('div');
        canvasD.appendChild(newCircle);
        let size = Math.floor(Math.random() * 30) +10;
        newCircle.style.width = size + "px";
        newCircle.style.height = size + "px";
        newCircle.style.position = "absolute";
        newCircle.style.left = (Math.floor(Math.random() * canvasD.offsetWidth) - size/2) + "px";
        newCircle.style.top = (Math.floor(Math.random() * canvasD.offsetHeight) - size/2) + "px";
        newCircle.style.backgroundColor = "blue";
        newCircle.style.borderRadius = "50px";
      }, 1000)

      window.requestAnimationFrame(animate);

      function animate() {
        let children = canvasD.childNodes;
        children.forEach(function(item) {
          item.style.left = (Math.floor(Math.random() * canvasD.offsetWidth)) + "px";
          item.style.top = (Math.floor(Math.random() * canvasD.offsetHeight)) + "px";
        })
        window.requestAnimationFrame(animate);
      }
    }
}