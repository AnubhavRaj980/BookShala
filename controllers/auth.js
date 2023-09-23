const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Replace with your actual credentials
const GOOGLE_CLIENT_ID = 'your-client-id';
const GOOGLE_CLIENT_SECRET = 'your-client-secret';

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback', // Your callback URL
    },
    (accessToken, refreshToken, profile, done) => {
      // You can save the user profile in your database or perform other actions here
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  // Serialize the user for session storage
  done(null, user);
});

passport.deserializeUser((user, done) => {
  // Deserialize the user from session storage
  done(null, user);
});

module.exports = passport;