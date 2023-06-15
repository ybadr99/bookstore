/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
const restructureApiResponse = (obj) => {
  const data = [];

  Object.keys(obj).map((bookId) => {
    obj[bookId][0].item_id = bookId;
    data.push(obj[bookId][0]);
  });

  return data;
};

export default restructureApiResponse;
