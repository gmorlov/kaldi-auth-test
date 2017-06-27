# Netlify CMS small-business template

This is a small business template built with [Victor Hugo](https://github.com/netlify/victor-hugo) and [Netlify CMS](https://github.com/netlify/netlify-cms), designed and developed by [Darin Dimitroff](http://www.darindimitroff.com/), [spacefarm.digital](https://www.spacefarm.digital).

![kaldi-auth-example](http://i.imgur.com/O5latIl.png)

## Getting started

Use our deploy button to get your own copy of the repository:

![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/bdougie/kaldi-auth-test)

**Set up Auth0**
Create a free [Auth0](https://auth0.com/) account if you don't have one already. Follow all of the onboarding instructions, including creating a new application in whatever region you like.

Go to the "Clients" tab of the Auth0 dashboard and create a new client for a single page application.

![auth0-example](http://i.imgur.com/plyuYno.png)

Go to the Client tab and click on the connection you created previously. It should look like this:

![auth0-client](http://i.imgur.com/3Xn6tJZ.png)

**Deploy to Netlify**
Add Auth0 Domain and Client ID in the Netlify Deploy Wizard, both can be retrieved by creating an Auth0 account(outlined below). 

![netlify-button-flow](http://i.imgur.com/bhCfXlr.png)

**CMS**

Once the authentication is don is done, you can to setup the GitHub integration for Netlify CMS.

Go to https://github.com/settings/developers and register a new application.

Then go to the "Access" tab in your new Netlify site and add a GitHub authentication provider.

Once that's done, you'll be able to enter the CMS by going to the URL of your new site and appending `/admin`

## Local Development

Clone this repository, and run `yarn` or `npm install` from the new folder to install all required dependencies.

Then start the development server with `yarn start` or `npm start`.

## Layouts

The template is based on small, content-agnostic partials that can be mixed and matched. The pre-built pages showcase just a few of the possible combinations. Refer to the `site/layouts/partials` folder for all available partials.

Use Hugo’s `dict` functionality to feed content into partials and avoid repeating yourself and creating discrepancies.

## CSS

The template uses a custom fork of Tachyons and PostCSS with cssnext and cssnano. To customize the template for your brand, refer to `src/css/imports/_variables.css` where most of the important global variables like colors and spacing are stored.

## SVG

All SVG icons stored in `site/static/img/icons` are automatically optimized with SVGO (gulp-svgmin) and concatenated into a single SVG sprite stored as a a partial called `svg.html`. Make sure you use consistent icons in terms of viewport and art direction for optimal results. Refer to an SVG via the `<use>` tag like so:

```
<svg width="16px" height="16px" class="db">
  <use xlink:href="#SVG-ID"></use>
</svg>
```
