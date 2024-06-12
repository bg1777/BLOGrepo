import React, { useState } from 'react';
import Modal from '../components/Modal';
import SuccessToast from '../components/SuccessToast';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddPost = (post) => {
    setPosts([...posts, post]);
    setShowSuccessToast(true);
  };

  const closeSuccessToast = () => {
    setShowSuccessToast(false);
  };

  return (
    <div className="min-h-screen h-auto bg-gradient-to-b from-mediumGray to-darkerGray">
      <div className="bg-gradient-to-r from-white to-lightGray p-6 drop-shadow-xl flex justify-between items-center">
        <h1 className="text-3xl font-questrial underline decoration-darkGray">Publicações</h1>
        <button onClick={handleOpenModal} className="text-xl p-3 bg-darkGray border border-lightGray drop-shadow-lg rounded-2xl font-questrial">
          Novo Post!
        </button>
      </div>

      <div className="p-2">
        {posts.map((post, index) => (
          <div key={index} className="bg-white p-4 m-4 rounded-xl drop-shadow-lg">
            {post.title && <h2 className="text-xl font-bold">{post.title}</h2>}
            {post.content && <p className="mt-2">{post.content}</p>}
            {post.image && <img src={URL.createObjectURL(post.image)} alt="Post" className={post.title || post.content ? "mt-4" : "mt-0"} />}
          </div>
        ))}
      </div>
      <div className="success-toast-container absolute bottom-4 right-4"> {/* Position at bottom right */}
        {showSuccessToast && (
          <SuccessToast message="Post criado com sucesso!" onClose={closeSuccessToast} />
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} onAddPost={handleAddPost} />
    </div>
  );
};

export default Home;