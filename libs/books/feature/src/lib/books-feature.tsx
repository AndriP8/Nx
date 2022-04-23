import { getBooks } from '@acme/books/data-access';
import { Books } from '@acme/books/ui';
import React from 'react';

/* eslint-disable-next-line */
export interface BooksFeatureProps {}

interface Book {
  id: number;
  title: string;
  author: string;
  rating: number;
  price: number;
}

export function BooksFeature(props: BooksFeatureProps) {
  const [books, setBooks] = React.useState<Book[]>([]);

  React.useEffect(() => {
    setBooks(getBooks());
  }, []);

  return (
    <>
      <h2>Books</h2>
      <Books books={books} onAdd={(book) => alert(`Added ${book.title}`)} />
    </>
  );
}

export default BooksFeature;
