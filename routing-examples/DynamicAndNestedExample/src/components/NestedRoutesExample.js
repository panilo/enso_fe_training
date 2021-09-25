import React from "react";
import {
  BrowserRouter,
  Route,
  useRouteMatch,
  useParams,
  Link,
  Switch,
} from "react-router-dom";

// This component will define our routes, it will be also int the app first page
export default class NestedRoutesExample extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/category">
            <Category />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const CATEGORIES = ["cinema", "food", "lifestyle"];

// This component will show a list of categories, for each it will create a new route
function Category() {
  let match = useRouteMatch();

  // for each category in the CATEGORIES array print a list item containing a Link
  return (
    <div>
      <ul>
        {CATEGORIES.map((cat) => (
          <li key={cat}>
            {/* N.B. if you use the match object you don't need to write the '/' at the beginning of the path. */}
            <Link to={`${match.url}/${cat}`}>{cat}</Link>
          </li>
        ))}
      </ul>

      {/*
        Because the Link we just created has no Route associated, we need to create one.
        To simplify the code we will define a simple component inside the route definition.
      */}
      {/* EXERCISE: Try to display this component separately, isolated from the one above */}
      <Switch>
        <Route path={`${match.url}/:categoryName`}>
          <CategoryDetails />
        </Route>
      </Switch>
    </div>
  );
}

function CategoryDetails() {
  let match = useRouteMatch();
  let params = match.params;
  let categoryName = params.categoryName;
  // or
  // let { categoryName } = useParams();

  return (
    <div>
      This is the category <b>{categoryName}</b> with url <b>{match.url}</b> and
      defined in route with path <b>{match.path}</b>
    </div>
  );
}
