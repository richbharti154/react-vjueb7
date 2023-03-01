import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {RecoilRoot} from 'recoil'
//  import App from './App';
import Hide from './Hide'
import LikeButton from './LikeButton'
import Toggle from './Toggle'
import Crud from './Crud';
import SearchButton from './SearchButton'
import TodoList from './TodoList'
import Fetch from './Fetch'
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RecoilRoot>
    {/* <App />  */}
    <Hide/>
    <LikeButton/>
    <Toggle/>
    <Crud/>
    <TodoList/>
    <SearchButton/>
    <Fetch/>
    </RecoilRoot>
  </StrictMode>
);
