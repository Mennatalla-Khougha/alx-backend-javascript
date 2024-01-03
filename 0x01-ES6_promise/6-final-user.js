// /* eslint-disable import/extensions */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([user, photo])
    .then((results) => {
      const resArray = [];
      results.forEach((ele) => {
        if (ele.status === 'fulfilled') {
          resArray.push({
            status: ele.status,
            value: ele.value,
          });
        } else {
          resArray.push({
            status: ele.status,
            value: ele.reason,
          });
        }
      });
      return resArray;
    });
}

module.exports = handleProfileSignup;
