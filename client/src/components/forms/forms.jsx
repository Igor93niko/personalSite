import React, { useCallback, useState } from 'react';
import { useHttp } from '../../hooks/useHttp';
import Loader from '../Loader/Loader';
import cl from './forms.module.css';
const Forms = () => {
  const [classForm,setClassForm] = useState({
    form:cl.form,
    formSend:cl.formSend
  });
  const [form,setForm] = useState({
    email:'',
    name:'',
    question:''
  });
  const {request,loading} = useHttp();
  const changeHandler = useCallback((e)=>{
    setForm({...form,[e.target.id]:e.target.value.trim()});
  },[setForm,form]);
  const clickHandler = useCallback(async()=>{
    const res = await request('/question/create','POST',form);
    if (res.error === 0){
      setClassForm({
        form:cl.form + ' ' + cl.success,
        formSend:cl.formSend + ' ' + cl.success
      });
    }
  },[request,form]);
  if (loading){
    return <Loader/>
  }
  return (
    <div className={cl.formBac}>
      {classForm.form===cl.form?
      <div className={classForm.form}>
        <div className={cl.formHeader}>
          <h2>Форма обратной связи:</h2>
        </div>
        <div className={cl.formBody}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Как к вам обращаться?</label>
          <input type="text" className="form-control" id="name" onChange={changeHandler}/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Адрес электронной почты:</label>
          <input type="email" className="form-control" id="email" onChange={changeHandler}/>
        </div>
        <div className="mb-3">
          <label htmlFor="question" className="form-label">Ваш вопрос:</label>
          <input type="text" className="form-control" id="question" onChange={changeHandler}/>
        </div>
        </div>
        <div className={cl.formFooter}>
          <button className='btn btn-primary' onClick={clickHandler}>Отправить</button>
        </div>
      </div>:null}
      {classForm.formSend!==cl.formSend?<div className={classForm.formSend}>
        <h1>Форма успешно отправлена</h1>
      </div>:null}
    </div>
  );
};

export default Forms;