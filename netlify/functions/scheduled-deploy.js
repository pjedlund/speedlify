import fetch from 'node-fetch';
import { schedule } from '@netlify/functions';

// This is a sample build hook URL
//const BUILD_HOOK = 'https://api.netlify.com/build_hooks/674f6b8766f21446c6af0f79';
const BUILD_HOOK = process.env.NETLIFY_REBUILD_HOOK;

// Schedules the handler function to run at midnight on
// Mondays, Wednesday, and Friday 0 0 * * 1,5
// Every 10 minutes */10 * * * *
// Every day at midnight 0 0 * * *
const handler = schedule('0 0 * * *', async () => {
  await fetch(BUILD_HOOK, {
    method: 'POST',
  }).then((response) => {
    console.log('Build hook response:', response);
  });

  return {
    statusCode: 200,
  };
});

export { handler };
