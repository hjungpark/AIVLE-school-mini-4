import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

function NewBookPage({ addNewBook }) {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        summary: '',
        genre: '',
        publisher: ''  // 출판사 추가
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            console.log(formData.summary);
            const response = await fetch("http://localhost:8080/api/books", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error("도서 등록 실패");
            }

            const data = await response.json();
            console.log("서버 응답:", data);

            alert("도서가 성공적으로 등록되었습니다!");
            // 도서 등록 후, 상위 컴포넌트에서 상태 업데이트
            addNewBook(formData);
            navigate("/books");
        } catch (error) {
            console.error("도서 등록 오류:", error);
            alert("도서 등록 중 오류가 발생했습니다.");
        }

    };

    const handleGoBack = () => {
        navigate(-1); // 이전 페이지로 돌아가기
    };

    return (
        // content 영역에서 충분히 공간 확보
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 600,
                    p: 3,
                    border: '1px solid #ccc',
                    borderRadius: 2,
                    backgroundColor: '#fff'
                }}
            >
                <Typography variant="h4" gutterBottom>도서 등록</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="도서 제목"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        fullWidth
                        required
                        margin="normal"
                    />
                    <TextField
                        label="작가 이름"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        fullWidth
                        required
                        margin="normal"
                    />
                    <TextField
                        label="도서 줄거리"
                        name="summary"
                        value={formData.summary}
                        onChange={handleChange}
                        fullWidth
                        required
                        margin="normal"
                        multiline
                        rows={4}
                    />
                    <TextField
                        label="출판사"
                        name="publisher"
                        value={formData.publisher}
                        onChange={handleChange}
                        fullWidth
                        required
                        margin="normal"
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel>장르 선택</InputLabel>
                        <Select
                            label="장르 선택"
                            name="genre"
                            value={formData.genre}
                            onChange={handleChange}
                            required
                        >
                            <MenuItem value="ROMANCE">로맨스</MenuItem>
                            <MenuItem value="SF">SF</MenuItem>
                            <MenuItem value="MYSTERY">미스터리</MenuItem>
                            <MenuItem value="THRILLER">공포,스릴러</MenuItem>
                            <MenuItem value="HISTORY">역사</MenuItem>
                            <MenuItem value="ESSAY">에세이</MenuItem>
                        </Select>
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        표지 생성 및 등록
                    </Button>
                    <Button
                        type="button"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        sx={{ mt: 2 }}
                        onClick={handleGoBack}
                    >
                        이전 페이지로 돌아가기
                    </Button>
                </form>
            </Box>
        </div>
    );
}

export default NewBookPage;











