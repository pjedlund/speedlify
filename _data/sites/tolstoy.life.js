module.exports = {
  name: 'www.tolstoy.life',
  description: 'tolstoy.life startpage',
  options: {
    runs: 1,
    frequency: 10080, // 7 days, in minutes (weekly check)
  },
  urls: ['https://www.tolstoy.life/'],
};
