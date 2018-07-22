# FlickrApp

## Install

1. Run `npm install`
2. Run `npm start`

## Usage

Simply enter your query in the search bar and **press run search** or **hit enter**. Your query will hit the Flickr API with a preset key and the results will be interpolated into your display.

## How it works

1. The *input* object is bound to a *FormControl* that holds our search parameters
2. On search, this *FormControl* value is sent to a service
3. This service then queries the Flickr Api and writes the incoming json into a local array
4. Angular then loops though this array, interpolating its objects into the template

# Bonus: AWS EC2 with Node.js

For EC2 deployment, a simple *build.yml* file is required. I can provide this upon request, the repo is private.