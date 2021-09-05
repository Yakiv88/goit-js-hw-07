const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryEl = document.querySelector('#gallery');
const addGalleryListEl = images.map(element => {
  const addGalleryListElImg = `<li class="gallery__item">
  <a href="https://goit.global/javascript/ru/v1/module-07/props-attrs.html"
  class="link3"><img src="${element.url}" alt="${element.alt}"
   width=320px height=150></a></li>`;
  return addGalleryListElImg;
});
galleryEl.insertAdjacentHTML("beforeend", addGalleryListEl.join(' '));
galleryEl.setAttribute("style", "list-style:none; display: flex; justify-content: space-around;")