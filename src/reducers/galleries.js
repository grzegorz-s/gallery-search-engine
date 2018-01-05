function gallery(state = {}, action) {
  console.log(state);
  // console.log(msg)
  switch (action.type) {
    case 'ADD_GALLERY':
      return {...state,
        data : {
          ...state.data,
          [action.galleryTag] : {
            tag : action.galleryTag,
            images : []
          }
        }
      }

    case 'REMOVE_GALLERY':
      let newData = {...state.data};
      delete newData[action.galleryTag]

      return {
        ...state,
        data: newData
      }
    
    case 'FETCH_GALLERY_REQUEST':
      return {
        ...state,
        data : {
          ...state.data,
          [action.galleryTag] : {
            ...state.data[action.galleryTag],
            isFetching: true
          }
        }
      }

    case 'FETCH_GALLERY_SUCCESS':
      return {
        ...state,
        data : {
          ...state.data,
          [action.galleryTag] : {
            ...state.data[action.galleryTag],
            images : action.images,
            isFetching : false,
          }
        }
      }

    default:
      return state
  }
}

export default gallery;