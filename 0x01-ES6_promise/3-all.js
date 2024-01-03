import { createUser, uploadPhoto } from './utils';

async function handleProfileSignup() {
  const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
  const { body } = photo;
  const { firstName, lastName } = user;

  console.log(`${body} ${firstName} ${lastName}`);
}

module.exports = handleProfileSignup;
