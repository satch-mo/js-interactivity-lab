console.log(`hello world`); // test to see that script link in html worked

const message = document.querySelector("#message");

const addMovie = (evt) => {
  //new function called addMovie takes in event as param
  evt.preventDefault(); //keeps values on page instead of refreshing after button clicked
  let inputField = document.querySelector("input"); // gets the input, saves into variable

  const movie = document.createElement("li"); // creates new variable new li element

  const movieTitle = document.createElement("span");
  movieTitle.textContent = inputField.value;
  movieTitle.addEventListener("click", crossOffMovie); //makes magic happen
  movie.appendChild(movieTitle);
  const deleteBtn = document.createElement("button"); //
  deleteBtn.textContent = "x"; // correct?
  deleteBtn.addEventListener("click", deleteMovie);
  movie.appendChild(deleteBtn); // NICE JUST FIGURED OUT DELETEBUTTON FUNCTIONALITY ALL BY MYSELF
  document.querySelector("ul").appendChild(movie);
  inputField.value = "";
};

const deleteMovie = (evt) => {
  evt.target.parentNode.remove(); // can't explain how it works, but delete button is real
  message.textContent = "Movie deleted!"; // message pops up! see line 3
};

const crossOffMovie = (evt) => {
  evt.target.classList.toggle("checked"); //  calling in checked class! NOTE: DOES NOT NEED . for class -- this functionality works now too!
  if (evt.target.classList.contains("checked")) {
    // if true that this contains checked class...
    message.textContent = "Movie watched!";
  } else {
    message.textContent = "Movie added back!";
  } // EVERYTHING WORKS AS IT SHOULD. CORE LAB COMPLETE, STOKED!!!
};

document.querySelector("form").addEventListener("submit", addMovie);
