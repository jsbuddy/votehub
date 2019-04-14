// next.config.js
const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');

module.exports = withTypescript(withSass({
    env: {
        adminFacebookId: "1847836048655551"
    }
}));