import { Route, Link } from 'react-router-dom';
import { useParams, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from "../components/quotes/HighlightedQuote"

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();
  console.log(match);


  const quote = DUMMY_QUOTES.find(quote => quote.id === +params.quoteId)
console.log(params);
  if (!quote) return <p>No quote found</p>

  return (
    <>
      <HighlightedQuote author={quote.author} text={quote.text}></HighlightedQuote>

      <Route exact path={`${match.path}/comments`}>
        <Link to={match.url} className='btn--flat centered'>Show Comments</Link>
      </Route>

      <Route exact path={`/quotes/${params.quoteId}`}>
        <Link to={`${match.url}/comments`} className='btn--flat centered'>Show Comments</Link>
        {/* <Link to={{ pathname: `${match.url}/comments` }} className='btn--flat centered'>Show Comments</Link> */}
      </Route>

        <Route path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>
    </>
  );
}

export default QuoteDetail;


const DUMMY_QUOTES = [
  { id: 1, author: "Walt DISNEY", text: "The way to get started is to quit talking and begin doing." },
  { id: 2, author: "Nelson MANDELA", text: "The greatest glory in living lies not in never falling, but in rising every time we fall." },
  { id: 3, author: "James CAMERON", text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success." },
  { id: 4, author: "Steve JOBS", text: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking" },
]
