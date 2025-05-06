const jokeElement = document.getElementById("joke");
const jokeButton = document.getElementById("jokeBtn");

const generateJoke = () => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        const data = JSON.parse(this.responseText).value;

        jokeElement.innerHTML = data;
      } else {
        jokeElement.innerHTML = "No Joke Found(Not Funny😒)";
      }
    }
  };
  xhr.send();
};

jokeButton.addEventListener("click", generateJoke);
