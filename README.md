[![Known Vulnerabilities](https://snyk.io/test/github/tkadlec/netlify-build-plugin-speedcurve/badge.svg)](https://snyk.io/test/github/tkadlec/netlify-build-plugin-speedcurve)

# Netlify SpeedCurve Deploy Plugin

After a successful build, tell SpeedCurve you've deployed and trigger a round of testing.

## Usage
1. Add the following lines to your `netlify.toml` configuration file:

```toml
[[plugins]]
package = "netlify-build-plugin-speedcurve"
```

Note: The `[[plugins]]` line is required for each plugin, even if you have other plugins in your `netlify.toml` file already.

2. Grab your [SpeedCurve API Key (Admin > Teams)](https://speedcurve.com/admin/teams) and the ID for the site you want to test (under Settings > Sites) and store them as environmental variables inside of Netlify. *At the moment, Netlify Build plugins are in private beta so you'll need to [work with the Netlify folks to get build plugins enabled](https://forms.gle/RemZEGP35P8fEL848).*

3. Using the latest version of the Netlify CLI, run a dry build:

```
netlify build --dry
```

If you see `Plugin netlify-build-plugin-speedcurve netlify-build-plugin-speedcurve` attached to the `onSuccess` lifecycle, you should be all set! Deploy knowing that you're tracking each change in SpeedCurve for analysis.
