import React from "react";
import {
  BrowserRouter,
  Route,
  useRouteMatch,
  useParams,
  Link,
  Redirect,
  Switch,
} from "react-router-dom";

// An array of users
const USERS = [
  { id: 0, name: "Danilo", friends: [1, 2, 3] },
  { id: 1, name: "Tommy", friends: [0, 3] },
  { id: 2, name: "Elena", friends: [0, 1, 3] },
  { id: 3, name: "Mickey", friends: [1, 2] },
];

// This component will define our routes, it will be also int the app first page
export default class DynamicRouterExample extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            {/* EXERCISE: Remove hardcoded paths */}
            <Route path="/dynamic/:id">
              <UserPage />
            </Route>
            {/* It's very important to define the home route */}
            <Route path="/dynamic">
              <ListAll />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

// This component will list all users
function ListAll() {
  return (
    <div>
      <h1>Insert user ID in the URL or click one of those below</h1>
      <ul>
        {USERS.map((u) => {
          return (
            <li>
              <Link to={`/dynamic/${u.id}`}>{u.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// This component (functional) will define the user page
function UserPage() {
  let { url } = useRouteMatch();
  let { id } = useParams();
  let user = find(parseInt(id)); // Parameters are string hence we need to parse to an integer

  return (
    <div>
      <h1>Hello {user.name}</h1>
      <p>You id is {user.id}</p>
      <p>Your friend list: </p>
      <ul>
        {user.friends.map((id) => {
          let userFriend = find(id);
          return (
            <li key={id}>
              <Link to={`/dynamic/${id}`}>{userFriend.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// This simple function returns the user from the users array
// This is an arrow function
const find = (id) => USERS.find((u) => u.id === id);
