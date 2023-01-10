import { deletes, get, patch, post } from "..";

export const getProductApi = () => {
  return get({
    route: "/posts",
  });
};

export const getalbumsApi = () => {
  return get({
    route: "/albums/1/photos",
  });
};


export const postProductApi = (data) => {
  return post({
    route: `/posts`,
    data,
  });
};

export const patchProductApi = (data, id) => {
  return patch({
    route: `/posts/${id}`,
    data,
  });
};

export const deletesProductApi = (id) => {
  return deletes({
    route: `/posts/${id}`,
  });
};
