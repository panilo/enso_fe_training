import React from "react";
import { Redirect, Route, Switch, useParams } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";

// This is an app with 3 different pages which are rendered dynamically in the browser
// The browser never refresh the page, despite the URL changes, this is thanks to React Routes
// that keeps the URL up to date as the user navigate through the app.
// This preserve the navigation history making sure function like the back button and bookmarks work properly.
export default function App() {
  return (
    <div>
      <BrowserRouter>
        {/*
          The switch looks through all its children route and renders
          the first one whose path matches the current URL.
          This is exclusive rendering.
        */}
        <Switch>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/user/:userName">
            <User />
          </Route>
          {/*
            The exact property is needed to avoid the home being displayed in all the not matching routes
          */}
          <Route exact path="/" component={Home} />
          <Route
            render={() => {
              return (
                <NoMatch>
                  <Home />
                </NoMatch>
              );
            }}
          ></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

// You can think of these components as "pages"
// in the app.
function Product() {
  let { id } = useParams();
  return <h1>I'm a product with id: {id}</h1>;
}

function User() {
  let { userName } = useParams();
  return <h1>Hello {userName}</h1>;
}

function Home() {
  return (
    <div>
      <p>Select: </p>
      <ul>
        <li>
          {/* Links provide navigation around the application. A route has to be defined in order to make the Link work. */}
          <Link to="/product/0">A product</Link>
        </li>
        <li>
          <Link to="/user/paul">A user</Link>
        </li>
      </ul>
    </div>
  );
}

function NoMatch(props) {
  return (
    <div>
      <h1>404</h1>
      {props.children}
    </div>
  );
}
