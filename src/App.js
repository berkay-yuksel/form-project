import { useState } from "react";

import "./App.css";
import bitesLogo from './logo.png';
const App = () => {
  const [inputs, setInputs] = useState({
    username:'',
    tc:'',
    birthday:'',
    cinsiyet:'',
    adress:'',
    mail:'',
    telno:'',
    universite:'',
    bolum:'',
    pozisyon:'',
    languages:'',
    tecrube:'',
    referans:'',
    basarı:'',
    hobi:'',
  });
  


  const handleChange = (key,value) => {
    // console.log(event.target.value);
    // const name = event.target.name;
    // const value = event.target.value;
    // setInputs((values) => ({ ...values, [name]: value }));
    setInputs({...inputs,[key]:value})
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
   };

  return (
    <div className="page_container">


      <img src={bitesLogo}  width="272px" height="82px"/>


      <div className="form_section">
        <form onSubmit={handleSubmit} className="form_container">
         


  {/* <form> 
        <div className="form-wrapper">
          <label className="form-label">Başlık</label>
           <input className="form-input" 
             type="text"
             name="baslık"
             value={inputs.baslık || ""}
             onChange={handleChange}
            />
         </div>
       </form>   */}
         
         

          <label className="ust-baslıklar">
            Kişisel Bilgiler
          </label>
          
          
        
         <div className="form-wrapper">
          <label className="form-label">Ad-Soyad:</label>
            <input className="form-input"
              type="text"
              value={inputs.username}
              onChange={(e)=>{handleChange('username',e.target.value)}}
            />
         </div>
         

       <div className="form-wrapper">
          <label className="form-label">T.C. Numarası:</label>
            <input className="form-input-number"
              type="number"
              value={inputs.tc}
              onChange={(e)=>{handleChange('tc',e.target.value)}}
            />
        </div>


       <div className="form-wrapper">
          <label className="form-label">Doğum Tarihi:</label>
            <input className="form-input-date"
              type="date"
              value={inputs.birthday}
              onChange={(e)=>{handleChange('birthday',e.target.value)}}
            />
         </div>

          
         <div className="form-wrapper">
           <label className="form-label">Cinsiyet:</label>
             <select className="form-input-cinsiyet"
              value={inputs.cinsiyet}
              onChange={(e)=>{handleChange('cinsiyet',e.target.value)}}>
                <option className="option-input" value=" ">Cinsiyet Seçiniz</option>
                <option className="option-input" value="erkek">Erkek</option>
                <option className="option-input" value="kadın">Kadın</option>
                
              </select>
          </div>


       <div className="form-wrapper">
         <label className="form-label">Adress:</label>
          <input className="form-input"
            type="text"
            value={inputs.adress}
            onChange={(e)=>{handleChange('adress',e.target.value)}}
            />
        </div>


        <label className="ust-baslıklar">
          İletişim Bilgileri
        </label>


      <div className="form-wrapper">
         <label className="form-label">Email:</label>
            <input className="form-input-email"
              type="email"
              value={inputs.mail}
              onChange={(e)=>{handleChange('mail',e.target.value)}}
            />
       </div>
           

      <div className="form-wrapper">
         <label className="form-label">Telefon Numarası:</label>
            <input className="form-input-number"
              type="number"
              value={inputs.telno}
              onChange={(e)=>{handleChange('telno',e.target.value)}}
            />
        </div>


        <label className="ust-baslıklar">
          Eğitim Bilgileri
        </label>

     <div className="form-wrapper">
        <label className="form-label">Üniversite:</label>
           <input className="form-input"
            type="text"
            value={inputs.universite}
            onChange={(e)=>{handleChange('universite',e.target.value)}}
            />
      </div>


      <div className="form-wrapper">
       <label className="form-label">Bölüm:</label>
         <input className="form-input"
            type="text"
            value={inputs.bolum}
            onChange={(e)=>{handleChange('bolum',e.target.value)}}
            />
        </div>



        <label className="ust-baslıklar">
          Başvuru Yapılan Pozisyon
        </label>
            

        <div className="form-wrapper">
           <label> </label>
             <select className="form-input-pozisyon"
              value={inputs.pozisyon}
              onChange={(e)=>{handleChange('pozisyon',e.target.value)}}>
                <option className="option-input" value=" ">Başvuru Yapmak İstediğiniz Pozisyonu Seçiniz</option>
                <option className="option-input" value="ik">İK</option>
                <option className="option-input" value="erpuzmanı">ERP Uzmanı</option>
                
              </select>
           </div>



        <label className="ust-baslıklar">
          Bilgisayar Bilgisi/Yabancı Dil
        </label>

       
      <div className="checkbox-wrapper">

         <label className="my-label">Python
           <input type="checkbox"         onChange={(e)=>{handleChange('code',e.target.value)}}  value="python" />
         </label>

          <label className="my-label">C
            <input type="checkbox"        onChange={(e)=>{handleChange('code1',e.target.value)}}   value="c" />
          </label>

          <label className="my-label">C++
            <input type="checkbox"         onChange={(e)=>{handleChange('code2',e.target.value)}}   value="c++" />
          </label>

          <label className="my-label">Javascript
            <input type="checkbox"        onChange={(e)=>{handleChange('code3',e.target.value)}}   value="javascript" />
          </label>

          <label className="my-label">Javascript
            <input type="checkbox"        onChange={(e)=>{handleChange('code3',e.target.value)}}   value="javascript" />
          </label>

          <label className="my-label">Javascript
            <input type="checkbox"        onChange={(e)=>{handleChange('code3',e.target.value)}}   value="javascript" />
          </label>

          <label className="my-label">Javascript
            <input type="checkbox"        onChange={(e)=>{handleChange('code3',e.target.value)}}   value="javascript" />
          </label>

          <label className="my-label">Javascript
            <input type="checkbox"        onChange={(e)=>{handleChange('code3',e.target.value)}}   value="javascript" />
          </label>

          <label className="my-label">Javascript
            <input type="checkbox"        onChange={(e)=>{handleChange('code3',e.target.value)}}   value="javascript" />
          </label>

          <label className="my-label">Javascript
            <input type="checkbox"        onChange={(e)=>{handleChange('code3',e.target.value)}}   value="javascript" />
          </label>

          <label className="my-label">Javascript
            <input type="checkbox"        onChange={(e)=>{handleChange('code3',e.target.value)}}   value="javascript" />
          </label>

       </div>
       
      

      <div className="form-wrapper">
        <label className="form-label">Yabancı Dil:</label>
          <input className="form-input"
            type="text"
            value={inputs.languages}
            onChange={(e)=>{handleChange('languages',e.target.value)}}
            />  
       </div>
        


        <label className="ust-baslıklar">
          Tecrübeler
        </label>


      <div className="form-wrapper">
        <label></label>
          <input className="form-input"
            type="text"
            value={inputs.tecrube}
            onChange={(e)=>{handleChange('tecrube',e.target.value)}}
            />      
      </div>


        <label className="ust-baslıklar">
          Referanslar
        </label>


      <div className="form-wrapper">
        <label></label>
          <input className="form-input"
            type="text"
            value={inputs.referans}
            onChange={(e)=>{handleChange('referans',e.target.value)}}
            />        
      </div>


         <label className="ust-baslıklar">
           Diğer Bilgiler
         </label>


      <div className="form-wrapper">
        <label className="form-label">Başarılar/Ödüller:</label>
          <input className="form-input"
            type="text"
            value={inputs.basarı}
            onChange={(e)=>{handleChange('basarı',e.target.value)}}
            /> 
      </div>


      <div className="form-wrapper">
        <label className="form-label">Hobiler:</label>
          <input className="form-input"
            type="text"
            value={inputs.hobi}
            onChange={(e)=>{handleChange('hobi',e.target.value)}}
            />        
       </div>
          




          <button type="submit">Gönder</button>
        </form>
      </div>
    </div>
  );
};

export default App;

