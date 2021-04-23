/* eslint-disable no-console */
const mailjet = require('node-mailjet').connect(
  'c55f10f559f121694261c5383936fc43',
  'ac45b5831fd676c0df2dae11932f89ac'
)

exports.handler = async (event, context, callback) => {
  const payload = JSON.parse(event.body)
  const { email, message, name } = payload

  // const msg = {
  //   to: SENDGRID_TO_EMAIL,
  //   from: email,
  //   subject: `New message from ${name}`,
  //   text: message,
  // }

  const request = mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: 'jarik-vap@ukr.net',
          Name: 'Yaroslav',
        },
        To: [
          {
            Email: 'jarik-vap@ukr.net',
            Name: 'Yaroslav',
          },
        ],
        Subject: 'New message from contact page',
        TextPart: 'Message',
        HTMLPart: `<h2>${name}, ${email}</h2><br /><br /><h3>${message}</h3>`,
      },
    ],
  })

  try {
    await request()
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
