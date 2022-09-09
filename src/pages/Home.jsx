import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';

import Helmet from '../components/Helmet'

import HeroSection from '../components/Introduction/HeroSection'
import Introduction from '../components/Introduction/Introduction'
import BestProduct from '../components/Introduction/BestProduct'
import Products from '../components/Introduction/Products'
import Story from '../components/Introduction/Story'
import Issue from '../components/Introduction/Issue'
import VideoSection from '../components/Introduction/VideoSection'

Modal.setAppElement('#root');


const Home = () => {

  // ** Modal 
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    let isShow = localStorage.getItem("modal_show");
    // openModal();
    // if(!isShow){
    //   openModal();
    //   localStorage.setItem("modal_show", true);
    // }

  }, [])
  // ** End of -> Modal 


  return (
    <Helmet title='Home'>
      <HeroSection/>
      <Introduction/>
      <BestProduct/>
      <Products/>
      <Story/>
      <Issue/>
      <VideoSection/>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Vài lời muốn nói</h2>
        <div>
          Ở phần banner đầu tiên, em  không lấy được mấy cái hình trong source,mấy cái hình khác thì tải về được còn cụ thể là ngôi sao, chat box, tam giác và cái hình nhọn nhọn. Em đã thử dùng photoshop, và nhiều tool nữa nhưng cũng không được như ý muốn. Cho nên em đã dùng biện pháp tạm thời là mấy cái hình custom. Mong anh/chị thông cảm!

        </div>
        <div>
          Bên cạnh đó cai modal này chỉ hiện một lần khi anh/chị truy cập lần đầu thôi, sẽ không làm phiền đâu. Em cám ơn!
        </div>
        <button onClick={closeModal}>close</button>

      </Modal>
    </Helmet>
  )
}

export default Home