import { CLOUDINARY } from '../constants/constants';

export function CloudinaryApi() {
  return {
    fetchImages
  };
}

async function fetchImages(tagName) {
  const options = {
    method: 'GET',
    mode: 'cors'
  };

  const response = await fetch(CLOUDINARY(tagName).URL, options);
  const data = await response.json();

  return data;
}
