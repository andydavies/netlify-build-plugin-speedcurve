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
    async finally() {
        console.log('Preparing to trigger SpeedCurve tests');

        fetch('https://api.speedcurve.com/v1/deploys', {
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
        .then(function (data) {
            if (data.status == 200) {
                console.log('SpeedCurve test submitted!');
            } else {
                console.log('SpeedCurve test couldn\'t be submitted. Status: ' + data.statusText);
            }
        })
        .catch(function (error) {
            console.log('Error: ', error);
        });
        
    }
}