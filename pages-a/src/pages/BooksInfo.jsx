import { useState } from "react";

export default function BooksInfo() {
  const [book, setBook] = useState({ name: "", author: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    
    const res = await fetch('http://localhost:3000/addingbook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book) 
    });
    
    const data = await res.json();
    alert(data.message);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value
    }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Book Name" value={book.name} onChange={handleChange}
        />
        <input type="text" name="author" placeholder="Book author" value={book.author} onChange={handleChange}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}