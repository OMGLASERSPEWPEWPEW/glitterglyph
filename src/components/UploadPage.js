import React, { useState } from 'react';
import axios from 'axios';

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelection = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', selectedFile);

    axios.post('http://localhost:5000/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  };

  return (
    <form onSubmit={handleFormSubmission}>
      <input type="file" accept=".docx" onChange={handleFileSelection} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadPage;
