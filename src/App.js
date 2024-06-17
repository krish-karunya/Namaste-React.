import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./component/Grocery";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./component/Cart";

const Grocery = lazy(() => {
  return import("./component/Grocery");
});

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    //here we are doing some authentication to get userName
    const data = {
      name: "Amma",
    };
    setUserName(data.name);
  }, []);
  // console.log(userName);
  return (
    <div className='app'>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          {/*we are passing setUserName function */}{" "}
          {/*here we are passing different username : amma*/}
          <Header />
          {/* <UserContext.Provider value={{ loggedInUser: "Elon musk" }}> */}
          {/*here we are passing different username : elon musk */}
          <Outlet />
          {/* </UserContext.Provider> */}
        </UserContext.Provider>
        {/* <Footer /> */}
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
