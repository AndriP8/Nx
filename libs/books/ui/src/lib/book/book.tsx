// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import Button from 'libs/ui/src/lib/button/button';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BookProps {}

export interface BookProps {
  book: {
    id: number;
    title: string;
    author: string;
    price: number;
    rating: number;
  };
  onAdd: (book: any) => void;
}

const StyledBook = styled.div`
display: flex;
align-items: center;
border-bottom: 1px solid #ccc;
&:last-child {
border-bottom: none;
}
> span {
padding: 1rem 0.5rem;
margin-right: 0.5rem;
}
.title {
flex: 1;
}
.price {
color: #478d3c;
}, 
`;

export function Book({ book, onAdd }: BookProps) {
  const handleAdd = () => onAdd(book);

  return (
    <StyledBook>
      <span className="title">
        {book.title} by <em>{book.author}</em>
      </span>
      <span className="rating">{book.rating}</span>
      <span className="price">${book.price}</span>
      {/* Add button to UI */}
      <span>
        <Button onClick={handleAdd}>Add to Cart</Button>
      </span>
    </StyledBook>
  );
}

export default Book;
