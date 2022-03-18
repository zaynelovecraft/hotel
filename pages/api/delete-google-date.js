export default function handler(req, res) {
  const { google } = require("googleapis");
  require("dotenv").config();

  // Provide the required configuration
  const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
  const calendarId = process.env.CALENDAR_ID;
  const calendarIdEst = process.env.CALENDAR_ID_ESTREALLA;

  // Google calendar API settings
  const SCOPES = "https://www.googleapis.com/auth/calendar";
  const calendar = google.calendar({ version: "v3" });

  const auth = new google.auth.JWT(
    CREDENTIALS.client_email,
    null,
    CREDENTIALS.private_key,
    SCOPES
  );

  const { hotel, id } = req.body;


  const deleteEvent = async (eventId) => {
    try {
      if (hotel == "Sol O Cien Condo") {
        let response = await calendar.events.delete({
          auth: auth,
          calendarId: calendarId,
          eventId: eventId,
        });

        if (response.data === "") {
          return 1;
        } else {
          return 0;
        }
      }
      if (hotel == "Estrella Sol-O-Cien Condo") {
        let response = await calendar.events.delete({
          auth: auth,
          calendarId: calendarIdEst,
          eventId: eventId,
        });

        if (response.data === "") {
          return 1;
        } else {
          return 0;
        }
      }
    } catch (error) {
      console.log(`Error at deleteEvent --> ${error}`);
      return 0;
    }
  };

  let eventId = id;

  deleteEvent(eventId)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
