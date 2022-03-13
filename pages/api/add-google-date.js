export default function handler(req, res) {

  const { google } = require("googleapis");
  require("dotenv").config();

  // Provide the required configuration
  const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
  const calendarId = process.env.CALENDAR_ID;

  // Google calendar API settings
  const SCOPES = "https://www.googleapis.com/auth/calendar";
  const calendar = google.calendar({ version: "v3" });

  const auth = new google.auth.JWT(
    CREDENTIALS.client_email,
    null,
    CREDENTIALS.private_key,
    SCOPES
  );

  const { s, e } = req.body

  const insertEvent = async (event) => {
    try {
      let response = await calendar.events.insert({
        auth: auth,
        calendarId: calendarId,
        resource: event,
      });

      if (response["status"] == 200 && response["statusText"] === "OK") {
        return 1;
      } else {
        return 0;
      }
    } catch (error) {
      console.log(`Error at insertEvent --> ${error}`);
      return 0;
    }
  };

  

  let event = {
    'summary': `This is the summary.`,
    'description': `This is the description.`,
    'start': {
        'dateTime': '2022-03-22T22:00:00.000Z',
        'timeZone': 'America/Los_Angeles'
    },
    'end': {
        'dateTime': '2022-03-24T18:00:00.000Z',
        'timeZone': 'America/Los_Angeles'
    }
};
insertEvent(event)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

}
