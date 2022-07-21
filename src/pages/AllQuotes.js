import QuoteList from "../components/quotes/QuoteList";

const AllQuotes = () => {
  return (
    <QuoteList quotes={DUMMY_QUOTES}></QuoteList>
  );
}

export default AllQuotes;

const DUMMY_QUOTES = [
  { id: 1, author: "Walt DISNEY", text: "The way to get started is to quit talking and begin doing." },
  { id: 2, author: "Nelson MANDELA", text: "The greatest glory in living lies not in never falling, but in rising every time we fall." },
  { id: 3, author: "James CAMERON", text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success." },
  { id: 4, author: "Steve JOBS", text: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking" },
]



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
