let catImages = [
  "https://sw-resources.netlify.app/everything-cat-extension/cat-1.jpg",
  "https://sw-resources.netlify.app/everything-cat-extension/cat-2.jpg",
  "https://sw-resources.netlify.app/everything-cat-extension/cat-3.jpg",
  "https://sw-resources.netlify.app/everything-cat-extension/cat-4.jpg",
  "https://sw-resources.netlify.app/everything-cat-extension/cat-5.jpg",
  "https://sw-resources.netlify.app/everything-cat-extension/cat-6.jpg",
  "https://sw-resources.netlify.app/everything-cat-extension/cat-7.jpg",
  "https://sw-resources.netlify.app/everything-cat-extension/cat-8.jpg",
  "https://sw-resources.netlify.app/everything-cat-extension/cat-9.jpg",
  "https://sw-resources.netlify.app/everything-cat-extension/cat-10.jpg",
  "https://sw-resources.netlify.app/everything-cat-extension/cat-11.jpg",
  "https://sw-resources.netlify.app/everything-cat-extension/cat-12.jpg",
  "https://sw-resources.netlify.app/everything-cat-extension/cat-13.jpg",
  "https://sw-resources.netlify.app/everything-cat-extension/cat-14.jpg",
  "https://sw-resources.netlify.app/everything-cat-extension/cat-15.jpg",
  "https://sw-resources.netlify.app/everything-cat-extension/cat-16.jpg",
  "https://sw-resources.netlify.app/everything-cat-extension/cat-17.jpg",
  "https://sw-resources.netlify.app/everything-cat-extension/cat-18.jpg",
  "https://sw-resources.netlify.app/everything-cat-extension/cat-19.jpg",
  "https://sw-resources.netlify.app/everything-cat-extension/cat-20.jpg",
];

const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
  let randomImg = Math.floor(Math.random() * catImages.length);
  img.src = catImages[randomImg];
});

const headers = document.querySelectorAll("h1,h2,h3,p");
headers.forEach((header) => {
  header.innerText = "CAT IS CUTE";
});

const content = document.querySelectorAll(
  "yt-formatted-string, .yt-formatted-string, p"
);
content.forEach((c) => {
  c.innerText = "CAT RULES";
});
