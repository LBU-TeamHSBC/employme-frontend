var express = require('express');
var router = express.Router();

const CLIENT_ID = "GOOGLE_CLIENT_ID";

const {OAuth2Client} = require('google-auth-library');

const verifyIdToken = (token) => {
  return new Promise((resolve, reject) => {
    const client = new OAuth2Client(CLIENT_ID);
    async function verify() {
      const ticket = await client.verifyIdToken({
          idToken: token,
          audience: CLIENT_ID,
      });
      const payload = ticket.getPayload();
      const userid = payload['sub'];
      const domain = payload['hd'];
      if (domain === 'student.leedsbeckett.ac.uk') {
        resolve(userid);
      }
      reject();
    }
    verify().catch(console.error);
  });
}

/* Handle Google login. */
router.post('/login', function(req, res, next) {
  const t = req.body.tokenId;
  verifyIdToken(t)
    .then(userid => res.json({
      result: 'OK',
      userData: {
        userid
      }
    }))
    .catch(err => res.json({ err: true }));
});

module.exports = router;