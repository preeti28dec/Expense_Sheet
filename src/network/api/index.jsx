import { deletes, get, patch, post, put } from "..";

export const getPostApi = () => {
  return get({
    route: "/posts",
  });
};
export const getComments = () => {
  return get({
    route: "/posts/1/comments",
  });
};

export const getUserData=()=>{
  return get({
    route:'/users'
  })
}
export const getUserTodos=()=>{
  return get({
    route:"/users/1/todos"
  })
}

export const getalbumsApi = () => {
  return get({
    route: "/users/1/albums",
  });
};
export const getPhototAlbums=()=>{
  return get({
    route:"/albums/1/photos"
  }
  )
}

export const putPostApi = (data, id) => {
  return put({
    route: `/posts/${id}`,
    data,
  });
};

export const postPostApi = (data) => {
  return post({
    route: `/posts`,
    data,
  });
};

export const patchPostApi = (data, id) => {
  return patch({
    route: `/posts/${id}`,
    data,
  });
};

export const deletesPostApi = (id) => {
  return deletes({
    route: `/posts/${id}`,
  });
};
