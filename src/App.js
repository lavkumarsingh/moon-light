import React, { useState } from 'react'
import './App.css';

function App() {
  const [navbar, setNavbar] = useState(false);
  const [menu, setMenu] = useState(0);

  const changeBackground = () => {
      if(window.scrollY>=100){
          setNavbar(true);
      }
      else{
          setNavbar(false);
      }
  };

  window.addEventListener('scroll', changeBackground);

  const handleMenu = (m) => {
    setMenu(m);
  }

  return (
    <div className='app'>
      <div className={`navbar_container ${!navbar ? 'nav' : 'nav-active'}`}>
        <div className={!navbar ? 'navlink' : 'navlink-active'}>
          <div className='social_media'>
            <img src='https://cdn.usbrandcolors.com/images/logos/instagram-logo.png' alt='' />
            <img src='https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png' alt='' />
            <img src='https://sjr.digital/wp-content/uploads/2020/11/social-linkedin-circle-512.png' alt='' />
          </div>
          <div>
            <img className='logo' src='/logo.png' alt='' />
          </div>
          <div>
            <img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png' alt='' />
            <p className='blink'>+91 9458492406</p>
          </div>
        </div>
      </div>

      <section className='hero'>
        <img className='background' src='/bg_hero.jpg' alt='' />
        <div className='overlay_container'>
          <div className='overlay'></div>
          <div className='hero_text'>
            <p>WELCOME</p>
            <p>Peak is one of the best luxury hotels in our state. We offer high-quality accommodation with a wide variety of rooms, additional services, and amenities available to all our guests.</p>
          </div>
        </div>
      </section>

      <div className='show_discount'>
        <div>
        <p className='text' >Book Now!</p> 
          <div>
            <span><img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png' alt='' /><p>7017819208</p></span>
            <span><img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png' alt='' /><p>9458492406</p></span>
          </div>
        </div>
      </div>

      <section className='about'>
        <img src='hotel.jpeg' alt='' />
        <div className='about_text'>
        <p>WELCOME</p>
        <p>Peak is one of the best luxury hotels in our state. We offer high-quality accommodation with a wide variety of rooms, additional services, and amenities available to all our guests.</p>          
        </div>
      </section>

      <section className='rooms'>
        <div className='rooms_text'>
        <p>Rooms & Suites</p>
        <p>At our hotel, there is a variety of rooms to choose from. Whether you are a casual traveler or a person demanding luxury wherever you go, you won’t be disappointed.</p>          
        </div>

        <div className='rooms_container'>

        <div className='rooms_card'>
            <img src='https://forsythsundownerinn.co/images/rooms/1.jpg' alt='' />
            <p>Double Room</p>
            <p>₹6000\Night</p>
          </div>

          <div className='rooms_card'>
            <img src='https://forsythsundownerinn.co/images/rooms/2.jpg' alt='' />
            <p>Double Room</p>
            <p>₹6000\Night</p>
          </div>

          <div className='rooms_card'>
            <img src='https://forsythsundownerinn.co/images/rooms/3.jpg' alt='' />
            <p>Double Room</p>
            <p>₹6000\Night</p>
          </div>

        </div>
      </section>
      <section className='hotel_menu'>
        <p>Our Restaurant Menu</p>
        <div className='menu'>
          <div className='menu_tab'>
            <p onClick={() => handleMenu(0)} className={`${menu===0 ? 'active' : ''}`}>Main</p>
            <p onClick={() => handleMenu(1)} className={`${menu===1 ? 'active' : ''}`}>Dessert</p>
            <p onClick={() => handleMenu(2)} className={`${menu===2 ? 'active' : ''}`}>Drinks</p>
          </div>

          <div className={`menu_list ${menu===0 ? '' : 'hide'}`}>
          <div className='menu_item'>
              <p>Four Cheese Flatbread</p>
              <p>Thin flatbread, glazed with a smoked gouda cheese sauce topped with caramelized onions, fresh peppers, seared sirloin steak, provolone, mozzarella and bleu cheese.</p>
            </div>
            <div className='menu_item'>
              <p>Four Cheese Flatbread</p>
              <p>Thin flatbread, glazed with a smoked gouda cheese sauce topped with caramelized onions, fresh peppers, seared sirloin steak, provolone, mozzarella and bleu cheese.</p>
            </div>
            <div className='menu_item'>
              <p>Four Cheese Flatbread</p>
              <p>Thin flatbread, glazed with a smoked gouda cheese sauce topped with caramelized onions, fresh peppers, seared sirloin steak, provolone, mozzarella and bleu cheese.</p>
            </div>
            <div className='menu_item'>
              <p>Four Cheese Flatbread</p>
              <p>Thin flatbread, glazed with a smoked gouda cheese sauce topped with caramelized onions, fresh peppers, seared sirloin steak, provolone, mozzarella and bleu cheese.</p>
            </div>
            <div className='menu_item'>
              <p>Four Cheese Flatbread</p>
              <p>Thin flatbread, glazed with a smoked gouda cheese sauce topped with caramelized onions, fresh peppers, seared sirloin steak, provolone, mozzarella and bleu cheese.</p>
            </div>
            <div className='menu_item'>
              <p>Four Cheese Flatbread</p>
              <p>Thin flatbread, glazed with a smoked gouda cheese sauce topped with caramelized onions, fresh peppers, seared sirloin steak, provolone, mozzarella and bleu cheese.</p>
            </div>
          </div>

          <div className={`menu_list ${menu===1 ? '' : 'hide'}`}>
            <div className='menu_item'>
              <p>Four Cheese Flatbread</p>
              <p>Thin flatbread, glazed with a smoked gouda cheese sauce topped with caramelized onions, fresh peppers, seared sirloin steak, provolone, mozzarella and bleu cheese.</p>
            </div>
            <div className='menu_item'>
              <p>Four Cheese Flatbread</p>
              <p>Thin flatbread, glazed with a smoked gouda cheese sauce topped with caramelized onions, fresh peppers, seared sirloin steak, provolone, mozzarella and bleu cheese.</p>
            </div>
            <div className='menu_item'>
              <p>Four Cheese Flatbread</p>
              <p>Thin flatbread, glazed with a smoked gouda cheese sauce topped with caramelized onions, fresh peppers, seared sirloin steak, provolone, mozzarella and bleu cheese.</p>
            </div>
          </div>

          <div className={`menu_list ${menu===2 ? '' : 'hide'}`}>
            <div className='menu_item'>
              <p>Four Cheese Flatbread</p>
              <p>Thin flatbread, glazed with a smoked gouda cheese sauce topped with caramelized onions, fresh peppers, seared sirloin steak, provolone, mozzarella and bleu cheese.</p>
            </div>
            <div className='menu_item'>
              <p>Four Cheese Flatbread</p>
              <p>Thin flatbread, glazed with a smoked gouda cheese sauce topped with caramelized onions, fresh peppers, seared sirloin steak, provolone, mozzarella and bleu cheese.</p>
            </div>
            <div className='menu_item'>
              <p>Four Cheese Flatbread</p>
              <p>Thin flatbread, glazed with a smoked gouda cheese sauce topped with caramelized onions, fresh peppers, seared sirloin steak, provolone, mozzarella and bleu cheese.</p>
            </div>
            <div className='menu_item'>
              <p>Four Cheese Flatbread</p>
              <p>Thin flatbread, glazed with a smoked gouda cheese sauce topped with caramelized onions, fresh peppers, seared sirloin steak, provolone, mozzarella and bleu cheese.</p>
            </div>
          </div>
          

        </div>
      </section>

      
      <section className='gallery'>
        <div className="container">
          <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/07/Jageshwar_Almora_3.jpg" alt="" />
          <img src="https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2018/07/bright-end-corner-almora.jpg" alt="" />  
          <img src="https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2018/07/deer-park-almora.jpg" alt="" />  
          <img src="https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2018/07/35821814_1762379847171920_8434503406344732672_n.jpg" alt="" />  
          <img src="https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/03/Kalimath.jpg" alt="" />  
        </div>
      </section>

      <div className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.484492307566!2d79.75413021544266!3d29.50223405093589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0c7441bffffff%3A0x45883501d4389749!2sDol%20Ashram!5e0!3m2!1sen!2sin!4v1635807920771!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            allowfullscreen="" 
            loading="lazy"
            title='map'>
        </iframe>
      </div>

{/*       <div className='team'>
        <div className=''>
          <img src='' />
          <p>Ankur Bist</p>
        </div>
        <div className=''>
          <img src='' />
          <p>Gaurav Khanna</p>
        </div>
      </div> 
      */}

      <footer>

      </footer>
    </div>
  );
}

export default App;
