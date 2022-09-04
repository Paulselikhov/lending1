import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <div className="Header-content">
          <div className="Logo"></div>
          <div className="Menu">
            <button className="Menu__Button">ПЕЧАТЬ ФОТО</button>
            <button className="Menu__Button">ТОВАРЫ</button>
            <button className="Menu__Button">УСЛУГИ</button>
            <button className="Menu__Button">ОТЗЫВЫ</button>
            <button className="Menu__Button">КОНТАКТЫ</button>
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
