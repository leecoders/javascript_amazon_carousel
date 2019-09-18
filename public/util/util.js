const $ = selector => document.querySelector(selector);

const getImages = imageObj => {
  let ret = [];
  Object.keys(imageObj).forEach(key => {
    imageObj[key].forEach(image => {
      ret.push(image);
    });
  });
  return ret;
};

export { $, getImages };
