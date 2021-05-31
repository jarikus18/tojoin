/* eslint-disable no-console */
const mailjet = require('node-mailjet').connect(
  'efa5b846513d2a993c8ed8ba3d2d2622',
  '2845ef838fd15f4d805433ccd4742dbb'
  // 'c55f10f559f121694261c5383936fc43',
  // 'ac45b5831fd676c0df2dae11932f89ac'
)

exports.handler = (event, context, callback) => {
  if (!event.body) {
    return {
      statusCode: 500,
      body: 'No data',
    }
  }

  const payload = JSON.parse(event.body)
  const { email, message, name, title } = payload

  const request = mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: 'site@teeple.co',
          Name: 'Teeple',
        },
        To: [
          {
            Email: 'loyupsys@gmail.com', //
            // Email: 'jarik-vap@ukr.net',
            Name: 'Teeple',
          },
        ],
        Subject: title || `New message from ${name}`,
        TextPart: 'Message',
        HTMLPart: `<h2>${name}, ${email}</h2><br /><h3>${message}</h3>`,
      },
    ],
  })

  try {
    request.then()
    return {
      statusCode: 200,
      body: 'Message sent',
    }
  } catch (err) {
    return {
      statusCode: err.code,
      body: err.message,
    }
  }
}
