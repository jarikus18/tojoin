const mailjet = require('node-mailjet').connect(
  'c55f10f559f121694261c5383936fc43',
  'ac45b5831fd676c0df2dae11932f89ac'
)

exports.handler = async (event, context, callback) => {
  // const payload = JSON.parse(event.body)
  // const { email, message, name } = payload

  // sgMail.setApiKey(SENDGRID_API_KEY)

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
        Subject: 'Greetings from Mailjet.',
        TextPart: 'My first Mailjet email',
        HTMLPart:
          "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
        CustomID: 'AppGettingStartedTest',
      },
    ],
  })

  try {
    await request
      .then((result) => {
        console.log(result.body)
      })
      .catch((err) => {
        console.log(err.statusCode)
      })
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
