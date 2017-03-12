# Random Bytes

We were tasked with creating an app that build websites.  Random Bytes is for non-technical users to write blog posts and pages for the site. When the visitor visits Random Bytes, they can see public content. When a user logs in, they should see a dashboard that lets them create and edit new posts or pages and decide on if they want them to be public or private.

### Technology used to create Random Bytes
* Node
* MongoDB
* Express
* Bootstrap
* Handlebars

### To build our site we used:
* We used MongoDB and Express to build an API.
* We created an API using 2 related models, one is the User, the other is the Guest
* The User can:
    * Create a blog.
    * Index their blogs.
    * Get a specific blog.
    * Update their blog.
    * Delete their blog.
    * Create a page.
    * Index their pages.
    * Get a specific page.
    * Update their pages.
    * Delete their page.
* The Guest can only see public blogs.
* We utilized  our  API by making requests from our front-end with HTML, Javascript, and jQuery
* We used authentication in our API to restrict access to the appropriate users.
* We crafted thoughtful user stories together; you can see them here: https://www.evernote.com/l/AoyD3eAT2lFChIK29JQWOdagaTFiXDxWIzE
* The way we managed team contributions and collaboration was by using a standard Git flow on Github.
        * We branched for each feature and merged with working code.

## General approach:

    We have a diverse team with different strengths, weaknesses, ability levels, and experiences.  The general approach we took was to break down the project into smaller parts based on functionality, then work on them as a team.  We met each morning and decided together what were going to be the tasks that should be completed, time boxing what should be done by when.  We periodically did sprint checks to see if we were on schedule, making adjustments when needed.
    Together we peer programed with a with a navigator, driver, researcher, and someone preparing for the next task.  We rotated  often to allow each member to experience the different roles.  We thought it wise to work on each stage of development together so that we all  learned from each other on every aspect of the project.
    When we started as team we had some obstacles we had members with different skill and speed deltas so we had an open and honest team meeting to recognize how best to use the strengths of each member.
    Some of the technical hurdles we solved:
* Getting the updated information to show after clicking the update button,
* Working with public and private content,
* Formatting the text within the <textarea>,
* Reformatting the timestamp to display YYYY/MM/DD,
* Getting the blogs to display from newest to oldest.

This is the link to our User stories : http://imgur.com/QeySlyN
This is the link to our ERD: http://imgur.com/9uYBda5
This is our app deployment: https://squadcomplex.github.io/team-project-frontend/
This is our link to our back end repo:https://github.com/SquadComplex/squad-complex-project-api
