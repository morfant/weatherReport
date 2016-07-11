  // var winston = Meteor.npmRequire('winston');

  // winston.log('info', 'Hello distributed log files!');
  // winston.info('Hello again distributed logs');

  // winston.level = 'debug';
  // winston.log('debug', 'Now my debug messages are written to console!');



if(Meteor.isServer) {
  //creating a global server logger
  logger = Meteor.npmRequire('winston');

  Meteor.publish('user', function() {
    var userId = this.userId;
    logger.info('user connected', {userId: userId});

    this.ready();
    this.onStop(function() {
      logger.info('user disconnected', {userId: userId});
    });
  });
}

if(Meteor.isClient) {
  Meteor.subscribe('user');
}

//Send Papertrail
var Papertrail = Meteor.npmRequire('winston-papertrail').Papertrail;

  logger.add(Papertrail, {
  host: "logs4.papertrailapp.com",
  port: 49006, //this will be change from the papertrail account to account
  logFormat: function(level, message) {
      return '[' + level + '] ' + message;
  },
  inlineMeta: true
});