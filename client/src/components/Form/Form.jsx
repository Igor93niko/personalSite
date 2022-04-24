import React, {useState} from 'react';
import axios from 'axios';

const Forms = () => {
  const [file, setFile] = useState();
  const UploadContent = (event) => {
    event.preventDefault();
    if (event.target.files[0]) {
        setFile(event.target.files[0]);
    }
};
  const submitHandler = async e => {
     e.preventDefault();
     const formData = new FormData();
     formData.append('photo', file);
     axios.post(
      "http://localhost:3000/upload",
      formData,
      {
          headers: {
              "Content-type": "multipart/form-data"
          },
      }
  )
      .then(res => {
          console.log(`Success` + res.data);
      })
      .catch(err => {
          console.log(err);
      })
  }

  return (
    <form onSubmit={submitHandler} encType='multipart/form-data'>
      <input type={'file'} name='photo' onChange={UploadContent}/>
      <input type='submit'/>
    </form>
  );
};

export default Forms;