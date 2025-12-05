import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// 가짜 데이터 (Mock Data)
const mockBooks = [
    { id: 1, title: 'Book 1', author: 'Author 1', genre: 'Fantasy', description: 'This is a fantasy book.', publisher: 'Publisher 1' },
    { id: 2, title: 'Book 2', author: 'Author 2', genre: 'Sci-Fi', description: 'This is a sci-fi book.', publisher: 'Publisher 2' },
    { id: 3, title: 'Book 3', author: 'Author 3', genre: 'Mystery', description: 'This is a mystery book.', publisher: 'Publisher 3' }
];

function BookDetailPage() {
    const { title } = useParams(); // URL에서 title 추출
    const [book, setBook] = useState(null);

    useEffect(() => {
        const selectedBook = mockBooks.find(b => b.title === title); // title에 해당하는 책을 찾아서
        setBook(selectedBook);  // 책 정보 설정
    }, [title]);

    if (!book) return <h2>도서 정보를 불러오는 중...</h2>;

    return (
        <div style={{ padding: '20px' }}>
            <h1>도서 상세</h1>
            <h2>{book.title}</h2>
            <p><strong>작가:</strong> {book.author}</p>
            <p><strong>장르:</strong> {book.genre}</p>
            <p><strong>출판사:</strong> {book.publisher}</p>
            <p><strong>줄거리:</strong> {book.description}</p>
            <Link to="/books">← 목록으로 돌아가기</Link>
        </div>
    );
}

export default BookDetailPage;





