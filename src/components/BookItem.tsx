import { Book } from "../types/Book";

interface BookItemProps {
  book: Book;

  onDelete: (
    id: string
  ) => Promise<void>;
}

export function BookItem({
  book,
  onDelete,
}: BookItemProps) {
  async function handleDelete() {
    if (!book._id) return;

    await onDelete(book._id);
  }

  return (
    <li
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>{book.title}</h3>

      <p>Autor: {book.author}</p>

      <p>Status: {book.status}</p>

      <button onClick={handleDelete}>
        Remover
      </button>
    </li>
  );
}
