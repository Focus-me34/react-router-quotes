import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
