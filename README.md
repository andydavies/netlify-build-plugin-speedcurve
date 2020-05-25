[![Known Vulnerabilities](https://snyk.io/test/github/tkadlec/netlify-build-plugin-speedcurve/badge.svg)](https://snyk.io/test/github/tkadlec/netlify-build-plugin-speedcurve)

# Netlify SpeedCurve Deploy Plugin
This is a [Build Plugin](https://docs.netlify.com/configure-builds/build-plugins) for Netlify that uses the SpeedCurve API to automatically trigger a round of tests after a successful build has occured.
After a successful build, tell SpeedCurve you've deployed and trigger a round of testing.

## Usage
1. Make sure you've [enabled build plugins](https://docs.netlify.com/configure-builds/build-plugins/) for your site on Netlify.

2. Install the plugin using `npm`:

```
npm i netlify-build-plugin-speedcurve
```

3. Update your `netlify.toml` configuration file to reference the plugin in your plugins section:

```toml
[[plugins]]
package = "netlify-build-plugin-speedcurve"
```

3. Grab your [SpeedCurve API Key (Admin > Teams)](https://speedcurve.com/admin/teams) and the ID for the site you want to test (under Settings > Sites) and store them as environmental variables inside of Netlify.

3. Using the latest version of the Netlify CLI, run a dry build:

```
netlify build --dry
```

If you see `Plugin netlify-build-plugin-speedcurve` attached to the `onSuccess` lifecycle, you should be all set! Deploy knowing that you're tracking each change in SpeedCurve for analysis.
