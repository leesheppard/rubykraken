# README
An experiment with Jekyll, Webpack and React.

# Ruby Kraken
[![forthebadge](https://forthebadge.com/images/badges/made-with-ruby.svg)](https://forthebadge.com)

[![Codeship Status for leesheppard/rubykraken](https://app.codeship.com/projects/6f62dd20-8d11-0137-2c97-0e4ef29cce88/status?branch=master)](https://app.codeship.com/projects/355470)

## Requirements

| Dependency             | Version                                                                                                  |
| ---------------------- | -------------------------------------------------------------------------------------------------------- |
| [Ruby](.ruby-version)  | [![Ruby Version](https://badge.fury.io/rb/ruby.svg)](https://badge.fury.io/rb/ruby)                      |
| [Jekyll](Gemfile#L3)   | [![Jekyll Version](https://badge.fury.io/rb/jekyll.svg)](https://badge.fury.io/rb/jekyll)                |
| Bundler                | [![Bundler Version](https://badge.fury.io/rb/bundler.svg)](https://badge.fury.io/rb/bundler)             |

### Setup

In your local development location, clone the app:

```bash
$ git clone https://github.com/leesheppard/rubykraken.git
$ cd rubykraken
```

### Development

Prior to testing in the browser, run `webpack` to compile the JS and 
`jekyll build` so Jekyll will register the newly compiled file.

````bash
$ webpack
$ jekyll build
$ bundle exec jekyll serve
````

You can keep Jekyll watching changes to `bundle.js` with

```bash
$ jekyll build -w 
$ webpack -w
```

### Deployment

Code integration is with CodeShip and will push to production once the Master branch passes.

Deploy to Production

```bash
$ vercel --target production
```

Deploy to Staging

```bash
$ vercel --target staging
```

Running locally

```bash
$ bundle exec jekyll serve
```

## Contact

Thanks for checking out my work.

![Lee Sheppard signature](http://res.cloudinary.com/leesheppard/image/upload/v1496495524/Lee-Sheppard-Black_iv1j84.png)

[![Hello](https://img.shields.io/badge/Hello-%40leesheppard-blue.svg)](https://twitter.com/leesheppard)

