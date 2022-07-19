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
         

           <form> 
        <div className="form-wrapper">
        <label className="form-label">Başlık</label>
        <input className="form-input" 
        type="text"
        name="baslık"
        value={inputs.baslık || ""}
        onChange={handleChange}
        />
        </div>

      </form>  
         
         
          <legend>
            <h3>Kişisel Bilgiler</h3>
          </legend>
          <br />
        
        <div className="username">
         <label className="form-label">Ad-Soyad</label>
            {/* <h5>Ad-Soyad:</h5>  */}
            <input className="username-input"
              type="text"
              value={inputs.username}
              onChange={(e)=>{handleChange('username',e.target.value)}}
            />
          
         </div>
        
         

        <div className="tc">
        <label>
            <h5>T.C. Numarası: </h5>
            <input
              type="number"
              value={inputs.tc}
              onChange={(e)=>{handleChange('tc',e.target.value)}}
            />
          </label>
        </div>


         <div className="birthday">
         <label>
            <h5>Doğum Tarihi: </h5>
            <input
              type="date"
              value={inputs.birthday}
              onChange={(e)=>{handleChange('birthday',e.target.value)}}
            />
          </label>
         </div>

          
          <div className="cinsiyet">
          <label>
          <h5>Cinsiyet: </h5>
              <select 
              value={inputs.cinsiyet}
              onChange={(e)=>{handleChange('cinsiyet',e.target.value)}}>
                <option value="erkek">erkek</option>
                <option value="kadın">Kadın</option>
                
              </select>
            </label>
          </div>


        <div className="adress">
        <label>
            <h5>Adress:</h5>
            <input
            type="text"
            value={inputs.adress}
            onChange={(e)=>{handleChange('adress',e.target.value)}}
            />
            </label>
        </div>


        <legend>
         <h3>İletişim Bilgileri</h3>
        </legend>

       <div className="mail">
       <label>
            <h5>Email:</h5>
            <input
              type="email"
              value={inputs.mail}
              onChange={(e)=>{handleChange('mail',e.target.value)}}
            />
          </label>
       </div>
           

           <div className="telno">
          <label>
            <h5>Telefon Numarası: </h5>
            <input
              type="number"
              value={inputs.telno}
              onChange={(e)=>{handleChange('telno',e.target.value)}}
            />
          </label>
           </div>


        <legend>
         <h3>Eğitim Bilgileri</h3>
        </legend>

      <div className="universite">
      <label>
            <h5>Üniversite:</h5>
            <input
            type="text"
            value={inputs.universite}
            onChange={(e)=>{handleChange('universite',e.target.value)}}
            />
         </label>
      </div>


        <div className="bolum">
        <label>
            <h5>Bölüm:</h5>
           <input
            type="text"
            value={inputs.bolum}
            onChange={(e)=>{handleChange('bolum',e.target.value)}}
            />
         </label>
        </div>



        <legend>
         <h3>Başvuru Yapılan Pozisyon</h3>
        </legend>
            
           <div className="pozisyon">
           <label>
              <select 
              value={inputs.pozisyon}
              onChange={(e)=>{handleChange('pozisyon',e.target.value)}}>
                <option value="ik">İK</option>
                <option value="erpuzmanı">ERP Uzmanı</option>
                
              </select>
            </label>
           </div>



        <legend>
         <h3>Bilgisayar Bilgisi/Yabancı Dil</h3>
        </legend>
       
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

       </div>
       
      

       <div className="languages">
       <label>
            <h5>Yabancı Dil:</h5>
            <input
            type="text"
            value={inputs.languages}
            onChange={(e)=>{handleChange('languages',e.target.value)}}
            />
            </label>
       </div>
        



        <legend>
         <h3>Tecrübeler</h3>
        </legend>


      <div className="tecrube">
      <label>
            <input
            type="text"
            value={inputs.tecrube}
            onChange={(e)=>{handleChange('tecrube',e.target.value)}}
            />
         </label>
      </div>

        <legend>
         <h3>Referanslar</h3>
        </legend>

      <div className="referans">
      <label>
            <input
            type="text"
            value={inputs.referans}
            onChange={(e)=>{handleChange('referans',e.target.value)}}
            />
         </label>
      </div>

         <legend>
         <h3>Diğer Bilgiler</h3>
        </legend>

        <div className="basarı">
        <label>
        <h5>Başarılar/Ödüller:</h5>
            <input
            type="text"
            value={inputs.basarı}
            onChange={(e)=>{handleChange('basarı',e.target.value)}}
            />
         </label>
        </div>


       <div className="hobi">
       <label>
        <h5>Hobiler:</h5>
            <input
            type="text"
            value={inputs.hobi}
            onChange={(e)=>{handleChange('hobi',e.target.value)}}
            />
         </label>
       </div>
          




          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;

