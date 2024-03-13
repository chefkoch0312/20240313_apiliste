import { React, useState, useEffect } from 'react';
import MyComponent from './MyComponent';

export default function BooksList() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setBooks([{
                "id": 1,
                "titel": "test1",
                "schreiberling": "sonstwer",
                "isbn": 123,
                "preis": 3.99
            },
            {
                "id": 2,
                "titel": "test2",
                "schreiberling": "wer anders",
                "isbn": 1234,
                "preis": 5.49
            },
            {
                "id": 3,
                "titel": "test3",
                "schreiberling": "unbekannt",
                "isbn": 234,
                "preis": 19.99
            },
            ])
        }, 2000)
    }, []);

    if (books.length === 0) {
        return <div className="container">Keine Bücher gefunden.</div>
    } else {
        return (
            <div className="container">
                {books.map((book) => (
                    <MyComponent key={book.id} buch={book} />
                ))}
            </div>
        )
    }
}
