# Immortal Garments

<img src="https://i.imgur.com/aYVT8hO.png" width="400" />

Did you know an estimated £140m worth of clothing is sent to UK landfill each year? Immortal garments is a website created to help tackle this issue. If a user has unwanted clothes at home, immortal garments is the platform to help them decide what's the best-suited sustainable option. Whether that's find the nearest place to donate clothes, recycle clothes, have your clothes mended or even find tips on how to mend clothes yourself!

---


Website designed and created by:
- [Alex]() (DevOps)
- [Hussian]() (Scrum Faciliator)
- [Maria]() (QA)
- [Sonia]() (Lead UX/UI)

- Coded in React and NextJS
- Jest for unit tests and Cypress for e2e
- Styled with Tailwind and CSS

## Features

- Ability to search for donation, recycling points, and tailors by postcode or current location
- Leaflet used for interactive maps
- Breadcrumbs for user to easily navigate back
- A progress bar for users to see their journey
- Ability for users to toggle between km and miles
- A spinning loader while waiting for search results

To view the webpage as a user simply visit https://immortal-garments.vercel.app/

---

### For developers 

To use as a developer:
1) [Sign up to yelp ](https://www.yelp.com/developers/documentation/v3/get_started) to get the authentication key for the API - keep this handy for step 5!
2) In the terminal run `git clone https://github.com/fac24/immortal-garments.git immortal-garments`
3) Then run `cd immortal-garments`
4) Then `code .` to open the repo in your code editor
5) Create an `env.local` file in the root of the project and add the following: `API_KEY="Bearer <YOUR-BEARER-FROM-YELP-GOES-HERE>"`
7) Run `npm install` to get the dependencies (this may take a few minutes)
8) Now you should be good to go!

*Please note: you can skip steps #1 and #5 and still be able to clone and view the repo - but doing so you will not be able to use all the search functionality*

To test as a developer follow the steps above and then:
9.  Run `npm run test` for Jest unit tests (these will display in the terminal - CLI) 
10. Or run `npm run cypress` for cypress e2e tests (this will open up cypress - GUI)



