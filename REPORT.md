# Immortal Garments Project Report
By Alex, Hussain, Maria and Sonia

## Introduction 

**What are you building?**
An application that will help people decide what they want to do with the clothes they're currently not wearing. They'll have the option to recycle, donate or mend the clothes by themselves or using professional services like tailors or drycleaners.

**Why are you building it?**
We feel that  a vast majority of the public are unaware that they can recycle textiles, and have no idea where they can do so. That some people my not know how or where to repair garments or where to donate. We want to educate and encourge the public to reduce, recycle and upcycle their old garments to create a positive enviromental impact.

## Project scope 
**What are you not building?**

After a second round of userbility testing, after sprint two when we had reached put MVP for the product, it came to our attention that users may want their postcode to be saved so that they don't have to type it on every page. This was going to be a strech goal but then we decided we didn't want to include this feature.


**How did you decide what features were important?**
We think that a search feature that will help people locate their nearby textile recycle bins or clothing donation points is important because it's an integral part of the initial idea. Also, we think that including some educational content on the importnace of recycling and donation is important for the mission of our product. 

## Project plan 
**How are you going to structure your sprints?**
![](https://i.imgur.com/WWQGtaN.png)

**What order are you going to build in?**
whats improtant is that our product is unique.

For the MPV we will focus on the features that provide the most helpful solution to our users like finding the nearest recycling centre. 


### Requirement analysis 

**How will you ensure your project is accessible to as many users as possible?**

We plan to use semantic HTML and ensure that correct elements are used for the job. We plan to run accessibility tests throughout the development, such as Lighthouse reports, screen reader tests, keyboard navigation tests and checking the colour contrast of our site.

Here is a screenshot that shows a page that took into account accessability quite strictly. As we have used green and pink which may to be differtiated easily with users who are red/green colour blind we added a key and different border to display this information in an additional way.

They keys also have logos with appropriate alts to assist screen readers.

![](https://i.imgur.com/LRcgM7J.png)

Code below is that of the screen shot above.

```js=
          .map((item) => {
            return (
              <Link key={item.title} href={item.url}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    item.category === "sew"
                      ? "green outline-dashed outline-2"
                      : item.category === "care"
                      ? "pink border"
                      : "grey border"
                  } block p-6 w-40 h-40 rounded-lg shadow-md cursor-pointer m-4 relative`}
                >
                  <p className="font-medium">{item.title}</p>
                  {/* next Image needs to be in a realive div to have tailwind classes */}
                  <div className="absolute h-6 w-6 bottom-2 right-2">
                    <Image
                      src={item.type === "video" ? video : article}
                      alt={item.type}
                      layout="fill"
                    />
                  </div>
                </a>
              </Link>
            );
          })}
```

**Are there any legal or regulatory requirements you should consider?**

Legal and ethical considerations are needed when using data sourced from another website.

We were unsure of the ethics around using APIs when not explicitly presented for public use. We received different guidance on this and decided the best course of action was to ask the owners of the relevant dataset. We did this and received a promising holding message but the timescale of the project meant that we did not get full access in time. For this reason, we made use of London Recycle's API requests, which we thought was appropriate for a small-scale, non-profit project like this one. We credited the owners of the datasets on the footer of the site. 

### Project learnings 
**Did your team work effectively?**

Yes. We have a clear sense of our separate project roles while also being flexible, pair-programming and stepping in where needed. We exceeded our expecations for the project and feel that is mainly due to considerate and effective teamwork.


**What would you do differently next time?**

- Tidy up code the and add comments throughout to make it easiser for others to follow the code and helpful for future maintainence
- Take more time to explain new learnings to other team members so everyone is clear about the code in the codebase
- More extensive unit tests with Jest


### Research and findings 
**How did user research inform your plan?**

The user research confirmened that many people are unaware thatthey can recycle their old clothes, it also highlighted the fact that many people want a convinient option when getting rid of their old clothes.

**What did you find out from user testing?**

The user testing was an insightful part of the design sprint as it gave us a lot of contrustive feeedback that we could take into account before going ahead with the build. Many users suggested including more guidence (in the form of text) along the way of their user journey would be appreciated. Furthermore, it was made apparent that users we're interested in the hows, the whats and the whys in regards to recycling and donating - which we have now decided to include in our product. 
 
**Were your assumptions right or wrong?**
From the user research some of our assumptions were confirmed, everyone we spoke to had clothes at home that they no longer used.

A screenshot of our Miro board, analysing the responses from our user research.
![](https://i.imgur.com/Lm4pbJr.jpg)

A screenshot of our Miro board, analysing the responses from our usability testing.
![](https://i.imgur.com/zlHZ8bq.png)

### Recommendations and conclusions 

**What features would you prioritise to build next?** 

- Save users' postcode
- More comprehensive and reliable info to display
- auto-fill postcode 
- More unit tests with Jest 
- Tidy up code and add comments throughout

**Was the project a success?**
- Yes, the team worked well and exceeded MVP
- UI could be improved 


## Software Development Lifecycle stages 

## Planning 
**What roles did your team take on?**

- Hussain - Scrum Facilitator 
- Maria - Quality Assurance
- Alex - DevOps
- Sonia - UX/UI Lead

**Explain the roles and responsibilities of all people working within the software development lifecycle, and how they relate to the project.**

**DevOps** has the role of the initial file set up, ensures the files are configured and takes responsibility for the site's deployment. So this role stretches right from the the start of the build right to the maintenence. As vercel has been used in this particular project, there has been the help of the vercel bot on each new deploy.

**UX Lead** takes executive decisions right from the planning (site designing) and takes on a lot of responsibility during the build. They create a style guide and ensure design heuristics are followed. 
In this particular project, as we used tailwind there was the added responsibility on the tailwind config.


**Scrum Facilitator** ensures that a each team member has their input at the weekly sprint planning and that useful issues are put down in the project board (idealy with useful tags). They should allow team memembers have their fair say in the daily stand up and mediate any conflicts. It is useful to have a scrum that balances the needs of the PO and the needs of the team. For this project the scrum was really good checking to see how each team mate was feeling at the start and end of weekly sprints.

Responsibilities include:

- Sprint planning
 - Prioritise issues
 - Break down larger issues into manageable chunks
- Lead standups and Sprint Planning.
- Clear blockers.
- Lead conversations with the Product Owner.
- Listen to and mediate Product Owner needs.
- Balance needs of the Product Owner with the needs of the Product Team.
- Provide a daily rundown of work completed.
- Lead Sprint Review.

**Quality Assurance** has the responsibility of setting to the test enviroment - in this case that was downloading and configuring Jest and Cypress. This was done at the start of the build - after DevOps set up the file structure so that testing can be done throughtout the build. Some tests files would be able to test features during the build, but also after production throught matainence to test for 


**Did these roles help your team work effectively?**

Outline how teams work effectively to produce software and how to contribute appropriately (K6) Compare and contrast the requirements of a software development team, and how they would ensure that each member (including themselves) were able to make a contribution (K6)



## Analysis 
What might be the intended and unintended consequences of building this product?

**INTENDED**

- More people learn about clothes and sustainability 
- More people learn where they can find sustainable solutions for their clothes

**UNINTENDED**

- Imperfect API results could mislead as to available options nearby
- The emphasis on individual actions might distract from larger structural forces driving the climate crisis


## Design 
**How did you plan a user experience?**
We wanted the user to be able to choose their journey based on what they want to do with their clothing.

We used figma to create a prototype to plan the possible user jouney.
![](https://i.imgur.com/Fu2UjPU.png)


**What technical decisions did you make?**
We chose both server-render and client-render. We decided to work on this project without using our own DB. We used Vercel for deployment. 


## Implementation/Build 
**How did you ensure your code was good?**
Create logical and maintainable code to deliver project outcomes, explaining their choice of approach. (S1)

We made PRs and reviewed code before merging, often commenting with suggested improvements before changes were merged into the main branch. We used ESLint and Prettier, set to default for all members, in order to keep consistency. Our QA made tests to further confirm the reliability of the code.

**What interesting technical problems did you have to solve?**
Outline and apply the rationale and use of algorithms, logic and data structures. (K9, S16)

CORS issues -> need to create own API endpoint for fetch requests.
Packages that were new to us (react-leaflet, d3): getting a handle on how they work, drawing on documentation and sifting through results that weren't relevant to their specific React iterations. 



**How did you debug issues that arose?**
Apply structured techniques to problem solving to identify and resolve issues and debug basic flaws in code (S7)

- console logs
- talking through code with one another and following a process's path across different functions and components
- consulting Vercel error logs

## Test 
**How did you verify your project worked correctly?**
As well as testing the product, imitating a user, we had unit tests and e2e testing.

An example of one of our unit tests in which ran Jest

```jsx=
// ✅ ------ PASSING -------
test("getMiles function returns correct integer", () => {
  expect(getMiles(1234567)).toBe("767.12");
});

// ✅ ------ PASSING -------
test("getKm functions return correct integer", () => {
  expect(getKm(12345.67)).toBe("12.35");
});
```

An example from part of the e2e testing which ran in Cypress

```jsx=
// ✅ ------ PASSING -------
describe("Long way to Recyle", () => {
  it("can go from home to Recyle via button and search", () => {
    cy.visit("http://localhost:3000");
    cy.get(
      '[alt="Cartoon of a pink t-shirt with a while heart in good contion half inside a yellow box"]'
    ).click();
    cy.url().should("eq", "http://localhost:3000/clothes-condition");
    cy.get('[alt="a tatted a blue jumper with sewn on patches"]').click({
      force: true,
    });
    cy.url().should("include", "clothes-condition/recycle");
    cy.get("#search").type("n4 2rb");
    cy.get("form").submit();
    //these is only renders on a successfull fetch
    cy.contains("p", "London");
    cy.contains("London");
    // these is only renders on a failed fetch
    cy.get("#search").type("hello testing");
    cy.get("button").contains("Search").click();
    cy.contains("p", "Oops, something went wrong. Please try again.");
  });
});

```


## Deploy 

**Where/how did you deploy your application?**

We deployed on Vercel. We didn't use a database for this project, which meant it was quite straightforward. Vercel made sense as a purpose-built platform for Next.js, which was the framework we had decided on. 

**Review and justify their contribution to building, managing and deploying code into the relevant environment in accordance with the project specification (S10)**

**What problems did you encounter during deployment?**

There were some initial problems in deployment because of an error in one of my local directories. This was resolved in the short-term by moving the repo and pushing from a different directory, but I followed up by making sure my directories were tidier.

CORS.

## Maintain 

**Is it easy for someone make changes to the codebase?**

The code is hosted on GitHub. For somebody with access to it, it is easy to see the code, fork and make changes. Any changes to the code itself would depend on one of the collaborators on the project approving a pull request. 

**Could a new person quickly be onboarded to contribute?**

Yes, though the code could be more clearly commented and modularised in parts. 

Establishes a logical thinking approach to areas of work which require valid reasoning and/or justified decision making (B2)
Describes how they have maintained a productive, professional and secure working environment throughout the project activity (B3)



