import { createUser, uploadPhoto } from './utils';

async function handleProfileSignup() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    const { body } = photo;
    const { firstName, lastName } = user;

    console.log(`${body} ${firstName} ${lastName}`);
  } catch (error) {
    console.log('Signup system offline');
  }
}

module.exports = handleProfileSignup;
