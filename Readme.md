# Technical Interview

>This monorepo contains the foundation for a take home technical screen. 

There are 3 possible parts to this exercise. Each could be completed independently, or you could mix and match depending on which technical skill set you'd like to flex.

This monorepo leverages [Nx](https://nx.dev) to generate and orchestrate the scaffolding for this project. Each repo is it's own entity, and each repo can work together to mimic an entire website complete with libraries, a frontend and an api.


## Part I [Search Repo](./libs/search-complete)

_Implement a search algorithm that takes a string and returns an array of words that start with that string. Everything required to finish this task is already set up and functioning in this repo. You should be able to jump right in and start working!_

You'll be changing 2 files:

- [search-complete.ts](./libs/search-complete/src/lib/search-complete.ts) is where you'll create a function to search a dictionary. (The dictionary is provided for you.)
- [search-complete.spec.ts](./libs/search-complete/src/lib/search-complete.spec.ts) will test your search function. This file contains a full test suite that outlines how the function should work. Your objective is to make the provided tests pass.

These commands will get you started:

```bash
# Install nx
npm install -g nx

# Clone this repo.

# From the yethon-org folder
 npm install
 nx test search-complete --watch
```

## Part II Frontend App

_Implement a "type ahead" style dropdown component. Use the string that a user types into an input as the search string for your algorithm.  Populate the drop down with the results from the search algorithm._

```markdown
# This hasn't been implemented...yet
# These are the steps I'd complete before handing this over to an interviewee:

1. Install the react app generation library
2. Generate a new "app" (which comes with a functioning test setup!) 
3. Use the search algorithm from Part I to implement a type ahead dropdown
   (You could decide to provided the lib to the candidate - or - you could forget the algorithm and use plain regex)
4. Write the tests for the dropdown (ie. re-implement the tests in Part I)
5. Provide the candidate with similar instructions as Part I
```

## Part III API (Backend)

_Implement an API that uses your algorithm. Call the API with a search string and return the results from the search algorithm._

```markdown
# This hasn't been implemented...yet
# These are the steps I'd complete before handing this over to an interviewee:

1. Install the express app generation library
2. Generate a new express "app" (which comes with a functioning test setup!) 
3. Use the search algorithm from Part I to implement an api
   (You could decide to provided the lib to the candidate - or - you could forget the algorithm and use plain regex)
4. Write the tests for the api (ie. re-implement the tests in Part I)
5. Provide the candidate with similar instructions as Part I
```

## Idea

**Where do Ideas come from?**

_I brushed up on some basics with [this course](https://btholt.github.io/complete-intro-to-computer-science/). One of my favorite exercises was the [trie](https://btholt.github.io/complete-intro-to-computer-science/tries) which is very conducive to this task since most people have an inherent understanding of how this functionality works._

![Whiteboard](./Idea.jpg?raw=true "Idea behind this project")
