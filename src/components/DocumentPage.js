// DocumentPage.js
import React, { useEffect, useState } from 'react';

function DocumentPage() {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/document')
            .then(response => response.json())
            .then(data => setContent(data.content));
    }, []); // Empty dependency array means this effect runs once on component mount

    return (
        <div>
            <h1>Document Content</h1>
            <pre>{content}</pre>
        </div>
    );
}

export default DocumentPage;
