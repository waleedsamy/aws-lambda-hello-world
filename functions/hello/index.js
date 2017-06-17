var Alexa = require('alexa-sdk');


var languageStrings = {
  'en-GB': {
    'translation': {
      'SAY_HELLO_MESSAGE': 'Hello World!',
      'SKILL_NAME': 'Traffics',
      'HELP_MESSAGE': 'You can search for offers or, you can say exit... Where do you like to travel in your next trip?',
      'HELP_REPROMPT': 'Where do you like to travel in your next trip?',
      'STOP_MESSAGE': 'Goodbye!',
      'NO_OFFER_MESSAGE': 'no offers found in '
    }
  },
  'en-US': {
    'translation': {
      'SAY_HELLO_MESSAGE': 'Hello World!',
      'SKILL_NAME': 'Traffics',
      'HELP_MESSAGE': 'You can search for offers or, you can say exit... Where do you like to travel in your next trip?',
      'HELP_REPROMPT': 'Where do you like to travel in your next trip?',
      'STOP_MESSAGE': 'Goodbye!',
      'NO_OFFER_MESSAGE': 'no offers found in '
    }
  },
  'de-DE': {
    'translation': {
      'SAY_HELLO_MESSAGE': 'Hallo Welt!',
      'SKILL_NAME': 'Traffics',
      'HELP_MESSAGE': 'Sie können nach Angeboten suchen, oder Sie können sagen, Ausfahrt ... Wo möchten Sie in Ihrer nächsten Reise reisen?',
      'HELP_REPROMPT': 'Wo möchten Sie in Ihrer nächsten Reise reisen?',
      'STOP_MESSAGE': 'Tschüss!',
      'NO_OFFER_MESSAGE': 'keine Angebote gefunden in '
    }
  }
};

var handlers = {
  'LaunchRequest': function() {
    this.emit('HelloWorldIntent');
  },
  'HelloWorldIntent': function() {
    this.emit(':tell', this.t('SAY_HELLO_MESSAGE'));
  },
  'OfferSearchIntent': function() {
    let city = this.event.request.intent.slots.city.value;
    let noOfferMessage = this.t('NO_OFFER_MESSAGE');
    this.emit(':tell', noOfferMessage + city)
  },
  'AMAZON.HelpIntent': function() {
    this.emit(':ask', this.t('HELP_MESSAGE'), this.t('HELP_REPROMPT'));
  },
  'AMAZON.CancelIntent': function() {
    this.emit(':tell', this.t('STOP_MESSAGE'));
  },
  'AMAZON.StopIntent': function() {
    this.emit(':tell', this.t('STOP_MESSAGE'));
  }
};

exports.handle = function(event, context, callback) {
  var alexa = Alexa.handler(event, context, callback);
  alexa.APP_ID = 'amzn1.ask.skill.5cd4eae1-339d-4a11-8512-9fb37c0897f8';
  alexa.resources = languageStrings;
  alexa.registerHandlers(handlers);
  alexa.execute();
};
