import React, { useCallback, useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/authcontext';
import { useHttp } from '../hooks/useHttp';

const AuthPages = () => {
  const [form,setForm] = useState({email:'',password:''});
  const auth = useContext(AuthContext);
  const {request,loading,  error, clearError} = useHttp();
  useEffect(()=>{
    clearError();
  },[error,clearError]);
  const changeHandler = useCallback((e)=>{
    setForm({...form,[e.target.id]:e.target.value});
  },[form,setForm])
  const clickHandler = async () => {
    try {
      const response = await request('/auth/login','POST',form,{}); 
      if (response.token){
        auth.login(response.token,response.userId);
      }
      else{
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  }
  if (loading)
  return(<div>Ожидайте</div>)
  return (
    <div className='authPage'>
      <div className="form">
        <div className="header-form">
          <h2>Авторизуйтесь</h2>
        </div>
        <div className="body-form">
          <input type={'email'} value={form.email} onChange={changeHandler} id={'email'}></input>
          <input type={'password'} value={form.password} onChange={changeHandler} id={'password'}></input>
        </div>
        <div className="footer-form">
          <button onClick={clickHandler}>Войти</button>
        </div>
      </div>
    </div>
  );
};

export default AuthPages;