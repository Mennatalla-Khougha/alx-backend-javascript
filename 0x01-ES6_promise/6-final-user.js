import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([user, photo]).then((results) => {
    const resultArray = [];
    results.forEach((ele) => {
      if (ele.status === 'fulfilled') {
        resultArray.push({
          status: ele.status,
          value: ele.value,
        });
      } else {
        resultArray.push({
          status: ele.status,
          value: `${ele.reason}`,
        });
      }
    });
    return resultArray;
  });
}
