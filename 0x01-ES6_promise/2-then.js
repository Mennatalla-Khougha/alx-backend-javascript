function handleResponseFromAPI(promise) {
  const isSuccess = {
    status: 200,
    body: 'success',
  };

  return promise
    .then(() => {
      console.log('Got a response from the API');
      return (isSuccess);
    }).catch(() => (new Error()));
}

module.exports = handleResponseFromAPI;
