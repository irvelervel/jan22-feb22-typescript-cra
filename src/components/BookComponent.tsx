import { Card } from 'react-bootstrap'
import { Book } from '../types/Book'

interface BookComponentProps {
  book: Book
  amin: boolean // example
}

const BookComponent = ({ book, amin }: BookComponentProps) => (
  <Card>
    <Card.Img variant="top" src={book.imageUrl} />
    <Card.Body>
      <Card.Title>{book.title}</Card.Title>
      <Card.Text>{book.description}</Card.Text>
    </Card.Body>
  </Card>
)

export default BookComponent
