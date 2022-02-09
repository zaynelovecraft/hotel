export default function handler (req, res) {


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
  
    const getEvents = async (dateTimeStart, dateTimeEnd) => {
  
      try {
          let response = await calendar.events.list({
              auth: auth,
              calendarId: calendarId,
              timeMin: dateTimeStart,
              timeMax: dateTimeEnd,
              timeZone: 'America/Los_Angeles'
          });
       
      
          let items = response['data']['items'];
          // console.log(items)
          return items;
      } catch (error) {
          // console.log(`Error at getEvents --> ${error}`);
          return 0;
      }
  };
  
  let start = '2022-2-01T00:00:00.000Z';
  let end = '2022-5-20T00:00:00.000Z';
  
  
  try {
  
      getEvents(start, end)
      .then((response) => {
        res.status(200).json(response);  
  
      })
          
  
  } catch(e) { 
      console.log(e)
  }
  
  
  
      
  
  }
  