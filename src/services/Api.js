import Http from "./Http";

export const getProfile = (id, config) => {
    return Http.get(`/`, config);
  };
  