let apiKey = "sIMHGnJ5lTyJj6mhjKYw2Y5vCvFcfBOiyvB9OckEKxo";
let count = 10;

let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

console.log(apiUrl);

let fethcing = false;

async function getPhotos() {
  fethcing = true;
  let response = await fetch(apiUrl);
  let data = await response.json();
  console.log(data);

  let box = document.querySelector(".box");
  data.forEach((photo) => {
    let img = document.createElement("img");
    img.src = photo.urls.regular;
    img.style.height = "300px";
    img.style.width = "350px";
    box.appendChild(img);
  });
  fethcing = false;
}

getPhotos();

window.addEventListener("scroll", function () {
    console.log( window.scrollY ,window.innerHeight, document.body.offsetHeight);
    let b = 100;
  if (
    !fethcing &&
    window.scrollY + window.innerHeight+100 >= document.body.offsetHeight
  ) {
    getPhotos();
  }
});