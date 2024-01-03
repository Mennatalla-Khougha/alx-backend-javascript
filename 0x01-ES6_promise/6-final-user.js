// /* eslint-disable import/extensions */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  const [user, photo] = await Promise.allSettled(
    [signUpUser(firstName, lastName), uploadPhoto(fileName)],
  );

  return [
    {
      status: user.status,
      value: user.value || user.reason,
    },
    {
      status: photo.status,
      value: photo.value || photo.reason,
    },
  ];
}

export default handleProfileSignup;
