import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http"
import { getAllQuotes } from "../lib/api"
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound"

const AllQuotes = () => {
  const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest()
  }, [sendRequest])

  if (status === "pending") {
    return <div className="centered"><LoadingSpinner></LoadingSpinner></div>
  }

  if (error) {
    return <p className="centered focused">{error}</p>
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound></NoQuotesFound>
  }

  return (
    <QuoteList quotes={loadedQuotes}></QuoteList>
  );
}

export default AllQuotes;

// const DUMMY_QUOTES = [
//   { id: 1, author: "Walt DISNEY", text: "The way to get started is to quit talking and begin doing." },
//   { id: 2, author: "Nelson MANDELA", text: "The greatest glory in living lies not in never falling, but in rising every time we fall." },
//   { id: 3, author: "James CAMERON", text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success." },
//   { id: 4, author: "Steve JOBS", text: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking." },
// ]



// {
//   props.quotes.map(item => {
//     return (
//       <QuoteDetail
//         key={item.id}
//         id={item.id}
//         author={item.author}
//         text={item.text}
//         quotes={props.quotes}
//       ></QuoteDetail>
//     )
//   })
// }
