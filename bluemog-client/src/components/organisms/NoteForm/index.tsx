import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import Input from 'components/molecules/Input';
import styled from '@emotion/styled';
import Button from 'components/molecules/Button';
import { gray } from 'constants/theme';
import { mainFont } from 'styles/base';
import Rating from 'components/molecules/Rating';
import NoteDateInfo from 'components/molecules/NoteDateInfo/index';
import noteList from 'mocks/notes.json';
import RatingButton from '../../molecules/RatingButton/index';

const StyledTitleInput = styled(Input)`
margin: 17px 0 10px 0;
font-size: 30px;
::placeholder {
  font-size: 30px;
}
`;

const StyledContentInput = styled(Input)`
  margin-bottom: 10px;
`;

const StyledTextarea = styled.textarea`
  width: 310px;
  height: 267px;
  resize: none;
  font-size: 25px;
  border: none;
  background: none;
  outline: none;
  margin: 40px 15px;
  ${mainFont}
  ::placeholder {
    font-size: 25px;
    color: ${gray}
  }
`;

function NoteForm() {
  const formCSS = css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const wrapperCSS = css`
    display: flex;
    flex-direction: column;
    width: 370px;
    height: 620px;
    margin-bottom: 20px;
    border-radius: 15px;
    /* background-color: black; */
    background-color: rgba(255, 255, 255, 0.95);
    padding: 23px;
  `;

  const headerCSS = css`
    display: flex;
    justify-content: flex-start;
    /* padding: 23px; */
  `;

  const infoCSS = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 150px;
  `;

  const imageCSS = css`
    width: 131px;
    height: 203px;
    margin-right: 31px;
    ${mainFont}
    background-color: rgb(240, 240, 240);
    color: rgb(73, 73, 73);
    border-radius: 10px;
    text-align: center;
    align-items: center;
    display: grid;
  `;

  const [values, setValues] = useState({
    title: '', author: '', publishing: '', content: '', rating: 0, createdAt: '2019. 03. 19', user: '구미',
  });

  // const [title, setTitle] = useState('');
  // const [author, setAuthor] = useState('');
  // const [publishing, setPublishing] = useState('');
  // const [content, setContent] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`제목: ${values.title} \n작가: ${values.author} \n출판사: ${values.publishing} \n평점: ${values.rating} \n내용: ${values.content}`);
  };

  const ratingElement = values.rating === 0 ? <RatingButton onChange={() => { alert('rating button clicked'); }} /> : <Rating rating={values.rating} />;

  return (
    <form css={formCSS}>
      <div css={wrapperCSS}>
        <div css={headerCSS}>
          <div css={imageCSS}>No Image</div>
          <div css={infoCSS}>
            <StyledTitleInput name="title" placeholder="제목" value={values.title} onChange={handleChange} autoFocus />
            <StyledContentInput name="author" placeholder="작가" value={values.author} onChange={handleChange} />
            <StyledContentInput name="publishing" placeholder="출판사" value={values.publishing} onChange={handleChange} />
            {ratingElement}
          </div>
        </div>
        <StyledTextarea name="content" placeholder="내용을 적어주세요" value={values.content} onChange={handleChange} />
        <NoteDateInfo note={values} />
      </div>
      <Button type="submit" onClick={handleSubmit}>작성 완료</Button>
    </form>
  );
}

export default NoteForm;
