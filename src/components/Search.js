import { useState } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";

export default function Search() {
  const [searchInput, setSearchInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Form className='d-flex align-items-center' onSubmit={(e) => handleSubmit(e)}>
      <Form.Group>
        <FloatingLabel label='Search News Articles...'>
          <Form.Control type="text" placeholder='Search News Articles...' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
        </FloatingLabel>
      </Form.Group>
      <Button variant="outline-secondary" type="submit" className='ms-2'>
        Submit
      </Button>
    </Form>
  );
}