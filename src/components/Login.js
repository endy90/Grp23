import React from 'react';
import Link from 'next/link';



const Login = () => {
    return (
        <div className='bg_img_login'>
        {/* <Modal title="Erreur" isActive={showModal} closeFunction={()=>setShowModal(!showModal)} type="information">
           <p>Contenue ajouté à votre liste de Films</p>
        </Modal> */}
        
      
   <div className='card__login'>
       <h1 className='card__title'>Sign In</h1>

       <form className='auth_textfield' onSubmit={(e) => e.preventDefault()}>

           <input className='textfield' type="text" placeholder='Email or phone number' 
           />

           <input className='textfield' type="password" placeholder='Password' 
          
           />

           <button type="submit" className='login__btn' onClick={() => Login()}>Sign In</button>
           </form>

           <span className='login_signup'>
           <Link href="/register">
            <strong>Sign up now</strong>
            </Link>
            </span>
            </div>
            {/* : 
            
               <button className='logout__btn' onClick={() => Logout()}>
                   Se Déconnecter
               </button> */}
            
          
   </div>
    );
}

export default Login;
