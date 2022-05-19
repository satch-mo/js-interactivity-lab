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
  message.textContent = `Movie ${evt.target.parentNode.firstChild.textContent} deleted!`; // message pops up! see line 3 personalised as well. needed to use firstChild property to target specific sibling of parent element. in this html, there's form with siblings input(movie title) and button.
  revealMessage(); // linking the function that removes the message
};

const crossOffMovie = (evt) => {
  evt.target.classList.toggle("checked"); //  calling in checked class! NOTE: DOES NOT NEED . for class -- this functionality works now too!
  if (evt.target.classList.contains("checked")) {
    // if true that this contains checked class...
    message.textContent = `${evt.target.textContent} watched!`; // personalises message with specific movie
  } else {
    message.textContent = `${evt.target.textContent} added back!`;
  } // EVERYTHING WORKS AS IT SHOULD. CORE LAB COMPLETE, STOKED!!!
  revealMessage();
};

// intermediate beginning here
const revealMessage = () => {
  message.classList.remove("hide"); // fixed functionality adding and removing hide -- cool!
  setTimeout(() => message.classList.add("hide"), 1000);
  // setTimeout(() => message.remove(), 1000); // THIS IS HOW YOU REMOVE MSG AFTER 1 SEC. now link to functions that will use this (deleteMovie,crossOffMovie).. but was not the way instructions said to do
};

document.querySelector("form").addEventListener("submit", addMovie);

// i'm so stoked. i was so frustrated today in class and during the lab. but not only did I finish the core lab, i figured out the intermediate section as well!! think this is fuzzy that will get clearer with application.
