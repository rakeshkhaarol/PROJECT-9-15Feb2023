import React from 'react';
import ReactDOM from 'react-dom/client';
//1. import { someNamedImport } from somelocation/somelibrary

//2. import someDefaultImport from somelocation/somelibrary
import A from './components/A';

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(
            <>
              <h1>hello</h1>
              <A text="friends" surname="Bairagi">Gaurav</A>
            </>  
            );

