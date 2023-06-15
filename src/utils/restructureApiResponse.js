const restructureApiResponse = (obj) => {
  const resObj = obj;
  const data = [];

  Object.keys(resObj).forEach((bookId) => {
    resObj[bookId][0].item_id = bookId;
    data.push(resObj[bookId][0]);
  });

  return data;
};

export default restructureApiResponse;
