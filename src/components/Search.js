import { useState } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Search({ setSearchTerm }) {
  const [searchInput, setSearchInput] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchInput);
    setSearchInput('');
    history.push('/articles/search');
  }

  return (
    <Form className='d-flex align-items-center' onSubmit={(e) => handleSubmit(e)}>
      <Form.Group>
        <FloatingLabel label='Search News Articles...'>
          <Form.Control
            type="text"
            placeholder='Search News Articles...'
            value={searchInput}
            required
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </FloatingLabel>
      </Form.Group>
      <Button variant="outline-secondary" type="submit" className='ms-2'>
        Submit
      </Button>
    </Form>
  );
}