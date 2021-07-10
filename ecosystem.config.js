module.exports = {
  apps : [{
    name: 'DiscordBot',
    script: 'main.js',
    watch: 'true'
  }],
};
process.on('SIGINT', function() {
  db.stop(function(err) {
    process.exit(err ? 1 : 0);
  });
});