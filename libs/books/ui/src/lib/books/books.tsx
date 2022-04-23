import styled from 'styled-components';
import Book from '../book/book';

/* eslint-disable-next-line */
export interface BooksProps {}

export interface BooksProps {
  books: any[];
}

const StyledBooks = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export function Books({ books }: BooksProps) {
  return (
    <StyledBooks>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      <h1>Welcome to Books!</h1>
    </StyledBooks>
  );
}

export default Books;
