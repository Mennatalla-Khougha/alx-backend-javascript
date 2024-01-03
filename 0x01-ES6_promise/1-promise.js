function getFullResponseFromAPI(success) {
  const isSuccess = {
    status: 200,
    body: 'Success',
  };

  return new Promise((resolve, reject) => {
    if (success) {
      resolve(isSuccess);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

module.exports = getFullResponseFromAPI;
