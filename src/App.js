import React from "react";
import { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
// import AllQuotes from "./pages/AllQuotes";
// import QuoteDetail from "./pages/QuoteDetail";
// import NewQuote from "./pages/NewQuote";
// import NotFound from "./pages/NotFound";
// ? LAZY LOADING THE COMPONENTS BELOW (NEEDS TO BE DONE AFTER NORMAL IMPORTS)
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));
const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));





function App() {

  return (
    <Layout>
      <Suspense fallback={<div className="centered"><LoadingSpinner></LoadingSpinner></div>}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/quotes"></Redirect>
          </Route>

          <Route exact path="/new_quote">
            <NewQuote></NewQuote>
          </Route>

          <Route exact path="/quotes">
            <AllQuotes></AllQuotes>
          </Route>

          <Route path="/quotes/:quoteId">
            <QuoteDetail></QuoteDetail>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
