const {
    env: {
        //Your SpeedCurve API Key (Admin > Teams)
        SPEEDCURVE_API_KEY,
        SPEEDCURVE_SITE_ID,
        //provided by Netlify
        COMMIT_REF
    }
} = require('process')

const fetch = require('node-fetch');

module.exports = {
    async onSuccess({ utils: { build: { failPlugin, failBuild } } }) {
        console.log('Preparing to trigger SpeedCurve tests');

        try {
            const { status, statusText } = await fetch('https://api.speedcurve.com/v1/deploys', {
                method: 'POST',
                headers: {
                    'Authorization': 'Basic ' + Buffer.from(SPEEDCURVE_API_KEY + ':' + 'x').toString('base64'),
                    "Content-type": "application/json",
                    "Accept": "application/json",
                    "Accept-Charset": "utf-8"
                },
                body: JSON.stringify({
                    site_id: SPEEDCURVE_SITE_ID,
                    note: COMMIT_REF
                })
            })

            if (status != 200) {
                return failPlugin('SpeedCurve test couldn\'t be submitted. Status: ' + statusText);
            }

            console.log('SpeedCurve test submitted!');
        } catch (error) {
            return failBuild('SpeedCurve test failed', { error })
        }
    }
}
