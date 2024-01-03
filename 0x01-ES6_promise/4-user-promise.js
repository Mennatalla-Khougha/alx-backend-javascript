function signUpUser(firstName, lastName) {
  const simple = {
    firstName,
    lastName,
  };

  return new Promise((resolve) => {
    resolve(simple);
  });
}

module.exports = signUpUser;
