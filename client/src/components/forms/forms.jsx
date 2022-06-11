import React, { useCallback, useEffect, useState } from 'react';
import { useHttp } from '../../hooks/useHttp';
import { useForm } from 'react-hook-form';
import Loader from '../Loader/Loader';
import cl from './forms.module.css';

const Forms = () => {
  const [data,setData] = useState([]);
  
  const getData = useCallback(async()=>{
    const res = await fetch('http://localhost:8000/api/issue/gari1993niko@gmail.com',{method:'GET',mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }});
    const datas = await res.json();
    console.log(datas,1);
    setData(datas);
  },[]);
  useEffect(()=>{
    getData();
    console.log(data)
  },[]);
  
  const [classForm,setClassForm] = useState({
    form:cl.form,
    formSend:cl.formSend
  });
  const [form,setForm] = useState({
    email:'',
    name:'',
    question:''
  });
  const {register,handleSubmit, formState: {errors}} = useForm();
  const {request,loading} = useHttp();
  const changeHandler = useCallback((e)=>{
    setForm({...form,[e.target.id]:e.target.value.trim()});
  },[setForm,form]);
  const clickHandler = useCallback(async(e)=>{
      e.preventDefault();
      console.log(form);
      const res = await request('/question/create','POST',form);
      if (res.error === 0){
        setClassForm({
          form:cl.form + ' ' + cl.success,
          formSend:cl.formSend + ' ' + cl.success
        });
      
    };
  },[request,form]);
  if (loading){
    return <Loader/>
  }
  return (
    <>
    <div>{data.map(data=>{
      return<p key={data.key}>{data.key} {data.desc}</p>
    })}</div>
    <div className={cl.formBac}>
      {classForm.form===cl.form?
      <form className={classForm.form} onSubmit={handleSubmit(clickHandler)}>
        <div className={cl.formHeader}>
          <h2>Форма обратной связи:</h2>
        </div>
        <div className={cl.formBody}>
        <div className={cl.line}>
          <div className={cl.inputForm}>
            <div className='mb-3'>
              <label htmlFor="name" className="form-label">Как к вам обращаться?</label>
              <input type="text" {...register('name',{required:true})} className="form-control" id="name" onChange={changeHandler}/>
            </div>
          </div>
          {errors.name?.type === 'required' && <div className={cl.divErr}><span className={cl.errors}>Имя обязательно</span></div>}
        </div>
        <div className={cl.line}>
          <div className={cl.inputForm}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Адрес электронной почты:</label>
              <input type="email" {...register('email',{required:true})} className="form-control" id="email" onChange={changeHandler}/>
            </div>
          </div>
          {errors.email?.type === 'required' && <div className={cl.divErr}><span className={cl.errors}>Почта обязательно</span></div>}
        </div>
        <div className={cl.line}>
          <div className={cl.inputForm}>
            <div className="mb-3">
              <label htmlFor="question" className="form-label">Ваш вопрос:</label>
              <input type="text" {...register('question',{required:true})} className="form-control" id="question" onChange={changeHandler}/>
            </div>
          </div>      
          {errors.question?.type === 'required' && <div className={cl.divErr}><span className={cl.errors}>Вопрос обязателен</span></div>}
        </div>
        </div>
        <div className={cl.formFooter}>
          <button className='btn btn-primary' type='Submit'>Отправить</button>
        </div>
      </form>:null}
      {classForm.formSend!==cl.formSend?<div className={classForm.formSend}>
        <h1>Форма успешно отправлена</h1>
      </div>:null}
    </div>
    </>
  );
};

export default Forms;