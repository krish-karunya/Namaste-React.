import React from "react";
import ReactDOM from "react-dom/client";

// React Element:

// React Element => it give the output as object and then while rendering this object will coverted in to html tag
// React.createElement => Object => HTMLelemnt(render)
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React ....🚀"
// );

// jsx => javascript syntax (merging html & js): HTML likes syntax

// jsx : (jsx is not html inside the javascript)
// when you write the code before the code is get into the browser , it will transpiled by parcel
// Inside the parcel ,"babel" is transpiling the code

// JSX => (Babel traspiled it to react )ReactElement = > js Object => HTML element(render)
// with help of the class we can differentate hmtl and jsx
// jsx sanitizing our data and also prevent form cross site attacking API
// jsx makes react code fatser and readable

// Write it inside the bracket if the jsx code morethan one line then only babel under

// React Element:
// this is also kind of variable we can directly mention inside the {} in jsx
const Heading = (
  <h1 id="heading" className="head">
    Namaste React from jsx🚀
  </h1>
);

// React Component :
const Title = () => (
  <h1 id="heading" className="head">
    Title Namaste React from jsx🚀
  </h1>
);
// there  two types of components : 1.class Based component  2. Functional Component

// React functional component => just a normal js function  return some jx code ,and it with capital letter

// React functional component :
// component composition => Component inside the another component

// we can insert comp=> inside comp and elem=>comp and elem => elem
const name = "krish";
const HeadingComponent = () => {
  return (
    <div className="container">
      <h1>Namaste React functional component by {name} </h1>;
      <Title />
    </div>
  );
};

const HeadinComponent1 = () => <h1>Namaste React functional component </h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
