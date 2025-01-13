
// CamelCase
import propTypes from 'prop-types';

//props = properties
//props is an object
// if data is a string "" however, different data types should be enclosed with a pair of {}

function Book() {
    return (
      <>
        <BookCard title="Atomic Habits" author="James Clear" 
        rating={4.8} isAvailable={true}></BookCard>
        <BookCard title="Rich Dad Poor Dad" author="Robert Kiyosaki" 
        rating={4.8} isAvailable={100}></BookCard>
        <BookCard title="The Laws of Human Nature" author="Robert Greene" 
        rating={4.6} isAvailable={true}></BookCard>
        <BookCard></BookCard>
      </>
  );
  }

  //function (parameters){}
  //parameters - placeholders
  //arguments - value that is passed to a functions parameters
  function BookCard(props) {
    // ternary operator
    // condition ? true : false
    // if (condition) {} else {}
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>
      <p>Rating: {props.rating}</p>
      <p>Available: {props.isAvailable ? "Yes" : "No"}</p>
    </div>
  );
}



//propTypes: ensure that passed value is of the correct data type
// propTypes: ensure that passed value is of the correct data type.
// propTypes: ensure that passed value is of the correct data type.
BookCard.propTypes = {
    title: propTypes.string,
    author: propTypes.string,
    rating: propTypes.number,
    isAvailable: propTypes.bool,
}

// defaultProps: set default values for props
BookCard.defaultProps = {
    title: "No Title",
    author: "No Author",
    rating: 0.0,
    isAvailable: false,
}

export default Book;

