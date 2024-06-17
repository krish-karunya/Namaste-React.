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

refer this link : https://dev.to/shiv 

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

# Episode 7

# what are the various way to add Images into our app?

    Using full URL of the image for the web or any public images. eg:
    * <img src="https://logo.png" alt="image" />
    Adding image into our project drag your image into the project & import it into the desired component.eg:
    * import image from "./logo.png;
    export default function App() {
        return <img src={image} alt="Logo" />
    }
    The correct way to structure images in your projects is to add them in an "images" folder. If you are using other assets then just images, you might want to add all in the assets folder. eg:
     import image from "./logo.png;
    export default function App() {
        return <img src={image} alt="Logo" />
    }

# what would happen if we do console.log(useState())?

    console.log(useState()) we get an array of undefined, function
    console log(useState()) -> [undefined,function]
    where first term in an array is state is undefined & second term in array is setState function is bound dispatchsetState.

# How will useEffect, behave if we don't add dependency array?

    syntax of useEffect is, useEffect(()=> {},[]);
    When the dependency array is empty, in the arguments of useEffect() hook, the callback function will be executed only one time during the initial render of the component.
    useEffect(() => {
        console.log("component render")
    });
    When the dependency array is empty, in the arguments of useEffect() hook, the callback function will be executed only one time during the initial render of the component.
    useEffect(()=> {
        console.log("run only once when the component gets mounted")
    },[]);
    When the dependency array contains a condition, the callback function will be executed one time during the initial render of the component & also render if there is a change in the condition.
    useEffect(() => {
        console.log("Run every time when my condition changed")
    },[condition]);

# what is SPA?

    Single page Application is a web application that dynamically updates the webpage with data from webserver without reloading/refreshing the entire page. All the HTML,CSS,JS are retrieved in the initial Load and other data/resources can be loaded dynamically whenever required. An SPA is sometimes reffered to as a single Page interface(SPI)

# what is client-side Routing & server-side Routing?

    In server side Routing or Rendering every change in URL, http request is made to server to fetch the webpage, and replace the current webpage with the older one.
    In client side routing or rendering(CSR), during the first load, the webpage is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to the new page without sending any request to backend. All single page Applications uses client-side routing.

# Episode 8 :

# How do you create Nested Routes react-router-dom configuration?

const router = createBrowserRouter([
{
path: "/", // show path for routing
element: <Parent />, // show component for particular path
errorElement: <Error />, // show error component for path is different
children: [ // show children component for routing
{
path: "/path",
element: <Child />
}
],
}
])
Now for /path using children again as follows:

const router = createBrowserRouter([
{
path: "/",
element: <Parent />,
errorElement: <Error />,
children: [
{
path: "/path",
element: <Child />,
children: [ // nested routing for subchild
{
path: "child", // Don't use '/' because then react-router-dom will understand it it's the direct path
element: <SubChild />,
}
],
}
],
}
])

# Read about createHashRouter, createMemoryRouter from React Router docs.

      createHashRouter is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL". Other than that, it is functionally the same as createBrowserRouter. For more reference Read more

      createMemoryRouter Instead of using the browsers history a memory router manages it's own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment. For more reference Read more

# What is the order of life cycle method calls in Class Based Components?

     order of lifecycle methods calls in Class Based Components:

constructor()
render ()
componentDidMount()
componentDidUpdate()
componentWillUnmount()
For more reference React-Lifecycle-methods-Diagram

# Why do we use componentDidMount?

      The componentDidMount() method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered. We can run any piece of react code to modify the components. For ex. It's the best place to make API calls.

# Why do we use componentWillUnmount? Show with example.

      componentWillUnmount() is useful for the cleanup of the application when we switch routes from one place to another. Since we are working with a SPA(Single Page Application) the component process always runs in the background even if we switch to another route. So it is required to stop those processes before leaving the page. If we revisit the same page, a new process starts that affects the browser performance. For example, in Repo class, during componentDidMount() a timer is set with an interval of every one second to print in console. When the component is unmounted (users moves to a different page), the timer will be running in the background, which we might not even realize and causing huge performance issue. To avoid such situations the cleanup function can be done in componentWillUnmount, in this example clearInterval(timer) to clear the timer interval before unmounting Repo component.

# (Research) Why do we use super(props) in constructor?

      super(props) is used to inherit the properties and access of variables of the React parent class when we initialize our component. super() is used inside constructor of a class to derive the parent's all properties inside the class that extended it. If super() is not used, then Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor is thrown in the console. The main difference between super() and super(props) is the this.props is undefined in child's constructor in super() but this.props contains the passed props if super(props) is used.

# (Research) Why can't we have the callback function of useEffect async?

      useEffect expects it's callback function to return nothing or return a function (cleanup function that is called when the component is unmounted). If we make the callback function as async, it will return a promise and the promise will affect the clean-up function from being called.

Life Cycle Daigram Link : https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

# Episode 9

# When and why do we need lazy()?

A: The lazy() function is a feature introduced in React 16.6 that allows for the lazy loading of components. The lazy() function is typically used in scenarios where you have large or less frequently used components that you want to load asynchronously.

A few situations when you might need to use lazy() are:

Large component bundles: If your application has large components or dependencies, loading them synchronously during the initial render can cause significant delays. By using lazy() along with code splitting, you can split these components into separate chunks and load them only when necessary, improving the overall performance of your application.

Infrequently accessed routes: If you have certain routes or pages in your application that are rarely accessed, it might be inefficient to load their associated components upfront. Using lazy() allows you to lazily load these components when the specific route is visited, reducing the initial bundle size and improving the application's initial load time.

Enhancing performance: By employing lazy() and code splitting, you can ensure that only the necessary components are loaded upfront, while the rest are loaded on-demand. This approach helps reduce the initial bundle size and improves performance by minimizing the amount of JavaScript that needs to be downloaded and executed during the initial page load.

# What is suspense?

A: Suspense is a component that helps manage the loading state of dynamic imports, such as lazily loaded components, and provides a fallback UI to display while the requested content is being loaded. It enables a better user experience by showing a loading indicator or placeholder content until the desired component or data is ready to be rendered..

# Why we got this error: A component was suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix this, updates that suspend should be wrapped with start transition ? How does suspense fix this error?

A: This error indicates that a React component is attempting to suspend or load data asynchronously in response to a synchronous event or input.

Here's how Suspense helps fix the error:

Managing loading states: By wrapping components or parts of your code that may perform asynchronous operations with Suspense, you can indicate that those components might suspend while loading data. This allows you to handle loading states more gracefully and display fallback content until the data is ready.

Displaying fallback UI: When a component wrapped with Suspense suspends, you can provide a fallback UI or loading indicator using the fallback prop of Suspense. This fallback content is shown to the user during the loading state, giving them a visual cue that the data is being fetched or processed.

Coordinate rendering with startTransition: The startTransition function, when used in conjunction with Suspense, allows you to mark a section of code as a low-priority update. By wrapping the asynchronous operation with startTransition, you're indicating to React that this update is less critical and can be deferred, preventing it from blocking the main thread and interrupting synchronous rendering.

Combining Suspense and startTransition ensures that the loading state is handled in a controlled manner. It allows React to prioritize rendering updates and avoid replacing the UI with loading indicators during synchronous input handling.

# Advantages and Disadvantages of using this code splitting pattern?

A: Advantages:

Improved performance: Code splitting allows you to load only the necessary parts of your application when they are needed, reducing the initial bundle size. This results in faster load times and improved overall performance, particularly for larger applications.

Faster initial load: By deferring the loading of non-essential code until it is actually required, code splitting can significantly reduce the time it takes for the initial page to load. This can greatly enhance the user experience, especially for users with slower internet connections or on mobile devices.

Better resource utilization: With code splitting, you can optimize resource utilization by loading code chunks only when they are needed. This can reduce memory consumption and improve the efficiency of your application.

Enhanced caching: Code splitting enables better caching and reusability of code. Once a code chunk is loaded, it can be cached by the browser, allowing subsequent visits to your application to benefit from faster load times.

Smoother user interaction: By loading code asynchronously and showing loading indicators or fallback content during the loading process, code splitting provides a more seamless user experience. It prevents the entire application from freezing or becoming unresponsive while waiting for large chunks of code to load.

Disadvantages:

Increased complexity: Code splitting adds complexity to your application's architecture, requiring you to manage and coordinate the loading of different code chunks. This can make the development process more challenging and may require additional tooling and configuration.

Potential for suboptimal user experience: If code splitting is not implemented carefully, it can lead to suboptimal user experiences. Poorly optimized code splitting may result in visible loading delays or multiple small network requests, which can negatively impact the perceived performance of your application.

Additional network requests: Code splitting can lead to an increase in the number of network requests made by your application. While these requests may be smaller in size, the total number of requests may still impact the overall load time, especially in scenarios with slower network connections.

Compatibility concerns: Code splitting relies on newer web standards and features, such as dynamic imports and ES modules. While these features are widely supported in modern browsers, older browsers may not fully support them, potentially leading to compatibility issues.

Build and deployment complexity: Implementing code splitting may require additional build and deployment configurations and tools. This can introduce complexity to your development workflow and may require learning and integrating new tools into your existing build process.

# When do we and why do we need suspense?

A: Lazy loading components: When you want to load components lazily or on-demand, Suspense allows you to specify fallback content that will be displayed while the component is being loaded. This helps improve the user experience by showing a loading indicator or placeholder content until the component is ready to render.

Data fetching: If your application needs to fetch data from an API or perform asynchronous operations, Suspense can be used to handle the loading state and display fallback content until the data is available. This simplifies the management of loading states and ensures a smooth transition between loading and displaying the data.

Code splitting: Code splitting involves breaking your application's code into smaller chunks that can be loaded separately. When using dynamic imports and code splitting techniques, Suspense can be used to wrap the components that are being lazily loaded. It allows you to provide fallback content while the code chunks are being fetched and loaded, improving the perceived performance of your application.

Concurrent mode (experimental): React's concurrent mode, introduces new features like rendering fallback content for slow components and prioritizing updates. Suspense plays a crucial role in managing concurrent rendering and helps coordinate the rendering and fallback states of components.
