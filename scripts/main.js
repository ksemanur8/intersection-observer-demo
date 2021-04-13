/* 
   We might want to have a threshold for
   when the class is toggled.
  
   What counts as an intersection?
  
   An intersection is whenever a given percentage 
   of an element is visible within the viewport.
  
   How much should be showing to trigger an 
   intersection (detection)?
  
   Threshold: 25% or 0.25
  
   Setting threshold low so action happens while user
   is scrolling--like the site is one step ahead.
 */

/*
   In what context is the observer observing?
   
   It is observing the root node.
 */

let options = {  
    root: null,  
    threshold: 0.25,
}

/*
   How are we going to handle intersection changes?
  
   1) When something starts to intersect
   2) When something ceases to intersect
  
   If it starts to intersect what do we want to do?
   -Apply the active class
  
   If it ceases to intersect what do we want to do?
   -Remove the active class
 */

function intersectionHandler(entries, observer) {
  // Do stuff described above
  console.log(entries);
  // If it is intersecting
  entries.forEach(entry => {    
    if(entry.isIntersecting) {
        entry.target.classList.add("active");
    } else {
        entry.target.classList.remove("active");
    }
    });
}

let observer = new IntersectionObserver(intersectionHandler, options);

/*

    We need to get reference to all of our images

*/

let images = document.querySelectorAll("img");

/* 
    Loop through all images and tell the observer to
    observe each one
*/

images.forEach((image) => {
    observer.observe(image);
});