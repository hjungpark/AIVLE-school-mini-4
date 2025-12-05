import React from 'react';

function BookCard({ title, author, isbn, publisher, genre, onClick }) {
    return (
        <div className="book-card" style={{
            border: '1px solid #ccc',
            padding: '10px',
            margin: '10px',
            borderRadius: '5px',
            display: 'flex',
            flexDirection: 'row',
            cursor: 'pointer' // 클릭할 수 있음을 나타내는 커서 변경
        }} onClick={onClick}>
            <div className="book-cover">
                <img src="https://via.placeholder.com/100x150" alt="book cover" style={{ width: '100px', height: '150px', marginRight: '20px' }} />
            </div>
            <div className="book-info">
                <h3>{title}</h3>
                <p className="author">저자: {author}</p>
                <p className="isbn">ISBN: {isbn}</p>
                <p className="publisher">출판사: {publisher}</p>
                <p className="genre">장르: {genre}</p>
            </div>
        </div>
    );
}

export default BookCard;




