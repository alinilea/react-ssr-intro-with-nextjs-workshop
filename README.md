# Workshop - An introduction to React Server Side Rendering with Next.js

### Setup
```
git clone

cd react-ssr-intro-with-nextjs-workshop

npm install

npm run dev

http://localhost:4000
```

### Webstorm tip
in order to **prevent often indexing**, find **_.next_** folder in the root of the project
 
 -> **right click it** -> **Mark Directory as** -> **Excluded**

### Workshop steps
#### step1/adding-pages
- demo: adding Home page using React functional component.
- task: add About and Contact pages with a div element containing a paragraph.

#### step2/adding-styling
- demo: adding CSS using styled-jsx (scoped, global)
Styled-jsx is the built-in CSS support library.
- task: 
a) add some styling as you wish.
b) create in root /src/components a file named Paragraph.js.
In this file create a functional component with the same name that returns a paragraph element.
Add a global scope style for paragraph elements on the Home page.
Add Paragraph React element on each page.
What have you noticed?

#### step3/adding-Head-component  
- demo: adding Head component on the Home page and populate it with 2 elements: title and a meta element with the name 
viewport.
"Head" is a built-in component for appending elements to the <head> of the page.
- task: add Head component to the other 2 pages using different titles.

#### step4/serving-static-assets
- demo: creating a folder named "static" in the root of the project and move here the nextjs.png (from "assets" folder).
displaying the file on the Home page using img element.
- task: 
a) add nextjs.png as background on body element on Home page and delete the recently added img element.
b) add favicon.ico on each page.
c) delete assets folder.

#### step5/routing
- demo: adding a navigation link to About page on Home page.
Client-side transitions between routes via a Link component.
- task: 
a) add navigation links on each page.
b) add Navbar component which includes the navigation links for all pages and implement it on each page.
c) add Layout Component which includes Navbar component and receives children as props; implement it on each page.

#### step6/fetching-data
- work in progress

#### next steps - work in progress
