import { fetchFlickr } from '../utils/api';

//add gallery
export function addGallery(galleryTag) {
  console.log('addgallery');
  return {
    type: 'ADD_GALLERY',
    galleryTag
  }
}

//remove gallery
export function removeGallery(galleryTag, i) {
  console.log('removing');
  return {
    type: 'REMOVE_GALLERY',
    i,
    galleryTag
  }
}

//fetching
export function fetchGallery(galleryTag) {
  console.log('fetch');
  return async function(dispatch) {
    dispatch({
      type : 'FETCH_GALLERY_REQUEST',
      galleryTag
    });
    const images = await fetchFlickr(galleryTag)

    dispatch({
      type : 'FETCH_GALLERY_SUCCESS',
      galleryTag,
      images
    })
  }
}