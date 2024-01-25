Namaste React🚀

# parcel

- Dev Build
- HMR hot moduler change
- Local server
- File watching algorithm - written by c++
- Caching - Faster Build
- Image optimization
- Minifiaction
- Bundling
- Compress
- Consistent Hashing
- Code Spliting
- Differentail bundling - Support older browsers
- Error Handling
- Diagnostics
- HTTPS
- Tree Shaking -remove unused code
- Different dev and prod bundles

# Episode -3

-To make our developer life easier we can create a script inside the package.json .wt need to be execute
that we have mention inside the script ,npm will takecare and also we saw how bable,power of curely bracket inside the jsx(preventing us from cross-site attact) & it is basically sanitizing our code,component compoision ,varies way of creating component.

there are two types of component :

- Class based component (older way)
  -Function based component(New way)

function based component at the end of the day, it's a normal js function which return some jsx

eg: npm run start

# Episode - 4

We are going to build food ordering app

Before you start to build a app : (pre-planning)

- you should exactly know what your are going to build
- how would look like

* set a Name
* Plan how it should look like
* UI mock is more important

let us do the Low Level Planing :

Header

- Logo
- Nav items

Body

- Search
- Resturant Container
  - ResCard
  - image
  - start rating
  - Delivary time
  - cuisines

Footer

- CopyRight
- Address
- Contact us

Props :
passing a props in to the component as same as passing a arugument to the function

map Function :

Whenever your using map function don't forgot put "keys" , "keys" will paly vital role to optimizing our code, Always key should unique .suppose we have 5 cards when you adding a new card all the card will render , but if you mentioned the key only that new card only render. it's take big performance hit

Why not to use index as key in React Lists (Practical Example)
The answer to this lies in the concepts of:

React Virtual DOM:
It's a lightweight representation of actual DOM, stored in memory and is never rendered.

Reconciliation in React:
The process of syncing Virtual DOM with the real DOM.

Diffing Algorithm:
The algorithm to find the minimum number of steps needed to update the real DOM.

Assumptions for using the Diffing Algorithm:
Two elements of different types will produce different trees.
The developer can hint at which child elements may be stable across different renders with a key attribute.

when we use index as a key , adding a new element in last position , it will work perfectly fine , what suppose if you add a new element in 1 position now the whole key or index value will change it will re-render all the component again

refer this link : https://dev.to/shiv1998/why-not-to-use-index-as-key-in-react-lists-practical-example-3e66

# Episode - 5

- we have learned file structure , as per the industry standard we have to kept all the file in ot the "src"folder and also inside the sr folder we have to create folder named as component and save all component in to that component folder

- Two of Export/Import

* Default Export / import - one file have only one default export
* Named export / import - one file can multiple named export,while importing we should use {}curely bracket

# React Hooks :

(Normal js utility Function)

- Use state() - Super powerful state variable in react
- Use Effect()

# useState();

whenever the state variable change react will re-render the component , what does react do behind the scence , basically whenever we executing the code react will create a virtual DOM , virtual DOM representation of Actual DOM , if do some change re-consiliation or react fiber and diff algorithim react update the UI very fast

React fiber :

- new way of finding the div and updating the dom

# Episode 6

# Monolith Architecture vs MicroService Architecture :

Monolith Architecture :

- Monolith is a single project that every have to work, suppose Your are doing some change in code Eg: wants to change the color of the button here we need to build the project again compile and deploy whole project ,

- if backend using java mean everyone have to code useing java only

MicroService Architecture :

- Work independently in different language ,All the service talk to each other depend upon the use Cases At the end of the day all project or portal map to same domain name

There are two types of Fetching the data from API :

1st Approach :

Page Load => API Call => Render

2nd Approach :(Best Approach)

Page Load => Render(skeleten) => API call => Re-render

# UseEffect(CallBack Function , Dependency Array ):

Anything you want to execute after rendering then mention it inside the use effect hook

# Optional chaining :

- While accessing the nested object from API .there is a chances to breaking the App,To aviod this we have to optional chaining , and return the value as undefined

# Shimmer UI :

- Shimmer UI is a better way to show loading states in your web or mobile app. It improves the user experience by providing visual feedback.

Episode 8 :

Life Cycle Daigram Link : https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
