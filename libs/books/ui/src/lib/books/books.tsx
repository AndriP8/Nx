import styled from 'styled-components';
import Book, { BookProps } from '../book/book';

/* eslint-disable-next-line */
export interface BooksProps {}

export interface BooksProps {
  books: BookProps['book'][];
  onAdd: (book: BookProps['book']) => void;
}

const StyledBooks = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export function Books({ books, onAdd }: BooksProps) {
  return (
    <StyledBooks>
      {books.map((book) => (
        <Book key={book.id} book={book} onAdd={onAdd} />
      ))}
      <h1>Welcome to Books!</h1>
    </StyledBooks>
  );
}

export default Books;
