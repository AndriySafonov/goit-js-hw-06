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

const galleryList = document.querySelector('.gallery');
const listGallery = images
  .map(
    image =>
      `<li class = 'list'><img class="imgCard" src=${image.url} width = '600' alt = ${image.alt}></img></li>`
  )
  .join('');
console.log(galleryList);
console.log(listGallery);
galleryList.insertAdjacentHTML('beforeend', listGallery);
const liEl = document.querySelector('.list');
const imgEl = document.querySelector('.imgCard');
console.log(liEl);
console.log(imgEl);
galleryList.style.display = 'flex';
galleryList.style.gap = '10px';
galleryList.style.listStyle = 'none';
galleryList.style.margin = '0';
galleryList.style.maxWidth = '100%';
galleryList.style.flexDirection = 'column';


