import React, { useState } from 'react';
import BookCard from '../components/BookCard';
import './BookListPage.css';
import Modal from '@mui/material/Modal';
import BookDetailModel from '../components/BookDetailModel'; // 올바른 경로로 수정
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function BookListPage({ books }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false); // 팝업 열기/닫기 상태
    const [selectedBook, setSelectedBook] = useState(null); // 선택된 도서 정보

    // 도서 목록을 검색어에 맞게 필터링
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const openModal = (book) => {
        setSelectedBook(book);  // 선택한 도서 정보 저장
        setIsModalOpen(true);    // 팝업 열기
    };

    const closeModal = () => {
        setIsModalOpen(false);  // 팝업 닫기
        setSelectedBook(null);  // 선택된 도서 정보 초기화
    };

    return (
        <div className="page-container">
            {/* 사이드바 */}
            <Sidebar />

            <div className="main-content">
                {/* 헤더 */}
                <Header />

                <div className="content">
                    <h1>도서 목록</h1>
                    <input
                        type="text"
                        placeholder="검색어 입력"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        style={{ padding: '8px', marginBottom: '20px', width: '100%', maxWidth: '300px' }}
                    />

                    <div className="book-list">
                        {filteredBooks.length > 0 ? (
                            filteredBooks.map((book, index) => (
                                <BookCard
                                    key={index}
                                    title={book.title}
                                    author={book.author}
                                    isbn={book.isbn}
                                    publisher={book.publisher}
                                    genre={book.genre}
                                    onClick={() => openModal(book)} // 클릭 시 팝업 열기
                                />
                            ))
                        ) : (
                            <p>등록된 도서가 없습니다.</p>
                        )}
                    </div>
                </div>
            </div>

            {/* 모달 팝업 */}
            <Modal
                open={isModalOpen}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <BookDetailModel book={selectedBook} onClose={closeModal} />
            </Modal>
        </div>
    );
}

export default BookListPage;




