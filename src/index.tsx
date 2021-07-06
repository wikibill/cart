import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {QueryClient, QueryClientProvider} from 'react-query';
import { Query } from '@testing-library/react';

const client = new QueryClient()

ReactDOM.render(
<QueryClientProvider client={client}>
<App />
</QueryClientProvider>
,document.getElementById('root') as HTMLElement);

