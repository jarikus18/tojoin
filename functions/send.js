/* eslint-disable no-console */
const mailjet = require('node-mailjet').connect(
  'c55f10f559f121694261c5383936fc43',
  'ac45b5831fd676c0df2dae11932f89ac'
)

exports.handler = (event, context, callback) => {
  if (!event.body) {
    return {
      statusCode: 500,
      body: 'No data',
    }
  }

  const payload = JSON.parse(event.body)
  const { email, message, name } = payload

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
        HTMLPart: `<h2>${name}, ${email}</h2><br /><h3>${message}</h3>`,
      },
    ],
  })

  try {
    request.then()
    console.log('succsess')
    return {
      statusCode: 200,
      body: 'Message sent',
    }
  } catch (err) {
    console.log('err', err)
    return {
      statusCode: err.code,
      body: err.message,
    }
  }
}
