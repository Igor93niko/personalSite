import React, { useCallback, useContext, useEffect, useState } from 'react';
import Loader from '../components/Loader/Loader';
import { AuthContext } from '../context/authcontext';
import { useHttp } from '../hooks/useHttp';

const Questions = () => {
  const [data,setData] = useState([]);
  const {request,loading} = useHttp();
  const auth = useContext(AuthContext);
  const getQuestions = useCallback(async()=>{
    try {
      const res = await request('/question/all','GET',null,{authorization:auth.token});
      if (res.error===0){
        setData(res.questions);
      }
    } catch (error) {
      console.log(error);
    }
  },[request,auth.token])
  useEffect(()=>{
    getQuestions();
  },[getQuestions]);

  if (loading){
    return <Loader/>
  }
  return (
    <div className='questions'>
        <table>
          <thead>
          <tr>
            <th>
              №
            </th>
            <th>
              От кого
            </th>
            <th>
              Почта
            </th>
            <th>
              Вопрос
            </th>
          </tr>
          </thead>
        <tbody>
        {data.map((question,index)=>{
          return (
          <tr key={index}>
            <td>
              {index+1}
            </td>
            <td>
              {question.name}
            </td>
            <td>
              {question.email}
            </td>
            <td>
              {question.question}
            </td>
          </tr>)
          })}
        </tbody>

        </table>
    </div>


  
  );
};

export default Questions;