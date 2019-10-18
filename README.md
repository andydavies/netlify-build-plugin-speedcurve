[![Known Vulnerabilities](https://snyk.io/test/github/tkadlec/netlify-build-plugin-speedcurve/badge.svg)](https://snyk.io/test/github/tkadlec/netlify-build-plugin-speedcurve)

# Netlify SpeedCurve Deploy Plugin

After a successful build, tell SpeedCurve you've deployed and trigger a round of testing.

## Usage
1. Install the plugin using `npm`:

```
npm i netlify-build-plugin-speedcurve
```

2. Update your `netlify.yml` configuration file to reference the plugin in your plugins section:

```yml
build:
  ...

plugins:
  netlify-build-plugin-speedcurve:
    type: netlify-build-plugin-speedcurve
```

3. Grab your [SpeedCurve API Key (Admin > Teams)](https://speedcurve.com/admin/teams) and the ID for the site you want to test (under Settings > Sites) and store them as environmental variables inside of Netlify. *At the moment, Netlify Build plugins are in private beta so you'll need to [work with the Netlify folks to get build plugins enabled](https://forms.gle/RemZEGP35P8fEL848).*

4. Using the latest version of the Netlify CLI, run a dry build:

```
netlify build --dry
```

If you see `Plugin netlify-build-plugin-speedcurve netlify-build-plugin-speedcurve` attached to the `finally` lifecycle, you should be all set! Deploy knowing that you're tracking each change in SpeedCurve for analysis.