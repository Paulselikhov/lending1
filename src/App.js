import { useState } from 'react';
import './App.css';

function App() {

  const [isActive, setActive] = useState(false)

  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <div className="App">
      <div className={isActive? "Header Active" : "Header"}>
        <div className="Header-content">
          <div className="Logo"></div>
          <div className="Menu">
            <button className="Menu__Button" onClick={ () => window.location.reload()}>ПЕЧАТЬ ФОТО</button>
            <button className="Menu__Button" onClick={ () => window.location.reload()}>ТОВАРЫ</button>
            <button className="Menu__Button" onClick={ () => window.location.reload()}>УСЛУГИ</button>
            <button className="Menu__Button" onClick={ () => window.location.reload()}>ОТЗЫВЫ</button>
            <button className="Menu__Button"  onClick={ () => handleToggle()}>КОНТАКТЫ</button>
          </div>
        </div>
      </div>
      <div className='Content'>
        <div className='Content-Main'>
            <div className='Content-Main__Title'>СОХРАНЯЕМ <text className='Text_orange'>ВАШИ</text> ЯРКИЕ ЭМОЦИИ <br/> НА <div className='Text_orange'>ДОЛГИЕ ГОДЫ</div> !
            </div>
            <div className='Content-Buttons'>
              <button className='Content-Buttons_Button'>РАСПЕЧАТАТЬ ФОТО</button>
              <button className='Content-Buttons_Button Button2'>ДРУГИЕ УСЛУГИ</button>
            </div>
        </div>
        <div className='Phones'></div>
        <div className='Triangles'></div>
      </div>
    </div>
  );
}

export default App;
