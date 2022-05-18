import { useEffect, useState } from 'react'
import BookComponent from './BookComponent'
import { Book } from '../types/Book'
import { Col, Row } from 'react-bootstrap'

const FetchComponent = () => {
  const [books, setBooks] = useState<Book[]>([])
  // initializing books with just [] will assign to it a type of never[]
  // which is NEVER :) a good thing!

  // let's now fetch the books from the API
  // 'https://striveschool-api.herokuapp.com/food-books'

  useEffect(() => {
    // like a componentDidMount
    fetchBooks()
  }, [])

  const fetchBooks = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/food-books'
      )
      if (response.ok) {
        let data = await response.json()
        setBooks(data)
      } else {
        console.log('error')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Row>
      {books.map((book) => (
        <Col md={4} className="text-dark">
          <BookComponent book={book} amin={true} />
        </Col>
      ))}
    </Row>
  )
}

export default FetchComponent
