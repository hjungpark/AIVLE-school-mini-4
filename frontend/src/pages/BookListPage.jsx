// import React, { useState } from 'react';
// import BookCard from '../components/BookCard';
// import BookDetailModal from '../components/BookDetailModal';
// import './BookListPage.css';
// import Header from '../components/Header';
// import { Modal } from '@mui/material';
//
// function BookListPage({ books, setBooks }) {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [selectedBook, setSelectedBook] = useState(null);
//
//     const filteredBooks = books.filter(book =>
//         book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         book.author.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//
//     const openModal = (book) => {
//         setSelectedBook(book);
//         setIsModalOpen(true);
//     };
//
//     const closeModal = () => {
//         setIsModalOpen(false);
//         setSelectedBook(null);
//     };
//
//     return (
//         <div className="page-container">
//             <div className="main-content">
//                 <Header />
//                 <div className="content">
//                     <h1>도서 목록</h1>
//                     <input
//                         type="text"
//                         placeholder="검색어 입력"
//                         value={searchTerm}
//                         onChange={e => setSearchTerm(e.target.value)}
//                         style={{ padding: '8px', marginBottom: '20px', width: '100%', maxWidth: '300px' }}
//                     />
//                     <div className="book-list">
//                         {filteredBooks.length > 0 ? (
//                             filteredBooks.map(book => (
//                                 <BookCard
//                                     key={book.id}
//                                     book={book}
//                                     setBooks={setBooks}
//                                     onClick={() => openModal(book)}
//                                 />
//                             ))
//                         ) : (
//                             <p>등록된 도서가 없습니다.</p>
//                         )}
//                     </div>
//                 </div>
//             </div>
//
//             <Modal open={isModalOpen} onClose={closeModal}>
//                 <BookDetailModal book={selectedBook} onClose={closeModal} />
//             </Modal>
//         </div>
//     );
// }
//
// export default BookListPage;

import React, { useState } from 'react';
import BookCard from '../components/BookCard';
import BookDetailModal from '../components/BookDetailModal';
import Header from '../components/Header';
import { Modal, Box, Typography, TextField, Grid, Container } from '@mui/material';

function BookListPage({ books, setBooks }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const openModal = (book) => {
        setSelectedBook(book);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedBook(null);
    };

    return (
        <Box sx={{ width: "100%" }}>
            {/* 중앙 컨텐츠 */}
            <Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>
                <Typography variant="h4" gutterBottom>
                    도서 목록
                </Typography>

                {/* 검색창 */}
                <TextField
                    label="검색어 입력"
                    variant="outlined"
                    fullWidth
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{ mb: 3 }}
                />

                {/* 도서 카드 리스트 */}
                <Grid container spacing={3}>
                    {filteredBooks.length > 0 ? (
                        filteredBooks.map(book => (
                            <Grid item xs={12} sm={6} md={4} key={book.id}>
                                <BookCard
                                    book={book}
                                    setBooks={setBooks}
                                    onClick={() => openModal(book)}
                                />
                            </Grid>
                        ))
                    ) : (
                        <Grid item xs={12}>
                            <Typography>등록된 도서가 없습니다.</Typography>
                        </Grid>
                    )}
                </Grid>
            </Container>

            {/* 상세 모달 */}
            <Modal open={isModalOpen} onClose={closeModal}>
                <BookDetailModal book={selectedBook} onClose={closeModal} />
            </Modal>
        </Box>
    );
}

export default BookListPage;
