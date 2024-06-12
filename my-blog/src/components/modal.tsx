import React, { useState, useEffect } from 'react';
import Toast from './Toast';

const Modal = ({ isOpen, onClose, onAddPost }) => {
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postImage, setPostImage] = useState(null);
  const [toastMessages, setToastMessages] = useState([]);

  const titleMaxLength = 48;
  const contentMaxLength = 240;

  useEffect(() => {
    if (!isOpen) {
      setPostTitle('');
      setPostContent('');
      setPostImage(null);
      setToastMessages([]);
    }
  }, [isOpen]);

  const handleCancel = () => {
    setToastMessages([]); // Clear all toasts
    onClose();
  };

  const handleSubmit = () => {
    const messages = [];

    if ((!postTitle && !postContent && !postImage) || (!postTitle && postContent && postImage) || (!postTitle && postContent)) {
      messages.push('Você não pode enviar um post sem título!');
    }
    if (!postContent && !postImage) {
      messages.push('Você não pode enviar um post vazio!');
    }

    if (messages.length > 0) {
      setToastMessages((prevMessages) => [...messages, ...prevMessages]);
      return;
    }

    const newPost = {
      title: postTitle,
      content: postContent,
      image: postImage,
    };
    onAddPost(newPost);

    // Reset state and close modal
    setPostTitle('');
    setPostContent('');
    setPostImage(null);
    onClose();
  };

  const removeToast = (index) => {
    setToastMessages((prevMessages) => prevMessages.filter((_, i) => i !== index));
  };

  return (
    isOpen && (
      <div className="fixed z-0 top-0 left-0 w-full h-full bg-white bg-opacity-50 flex justify-center items-center">
        <div className="bg-white w-3/4 h-fit p-4 rounded-xl mt-4">
          <div className="toast-container">
            {toastMessages.map((message, index) => (
              <Toast key={index} message={message} onClose={() => removeToast(index)} />
            ))}
          </div>
          <div className="mb-4">
            <label htmlFor="postTitle" className="block text-softBlack text-sm font-bold mb-1">
              Título do Post: <span className="text-xs">{postTitle.length}/{titleMaxLength}</span>
            </label>
            <input
              id="postTitle"
              type="text"
              placeholder="Título do Post"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value.slice(0, titleMaxLength))}
              className="w-full h-10 bg-white text-softBlack px-4 rounded-full border-2 border-darkGray"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="postContent" className="block text-softBlack text-sm font-bold mb-1">
              Conteúdo do Post: <span className="text-xs">{postContent.length}/{contentMaxLength}</span>
            </label>
            <textarea
              id="postContent"
              placeholder="Conteúdo do Post"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value.slice(0, contentMaxLength))}
              className="w-full h-40 bg-mediumGray text-softBlack placeholder-softBlack px-4 py-2 rounded-lg border-2 border-darkGray"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="postImage" className="block text-softBlack text-sm font-bold mb-1">Imagem do Post:</label>
            <input
              id="postImage"
              type="file"
              onChange={(e) => setPostImage(e.target.files[0])}
              className="w-full h-10 bg-white text-softBlack px-4 py-2 rounded-full"
            />
          </div>
          <div className="flex justify-center">
            <button onClick={handleCancel} className="bg-mediumGray hover:bg-darkGray text-white font-bold py-2 px-4 rounded-full mr-4 text-sm">Cancelar</button>
            <button onClick={handleSubmit} className="bg-softBlack hover:bg-black text-white font-bold py-2 px-4 rounded-full text-sm">Enviar</button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;