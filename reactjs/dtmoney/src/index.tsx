import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'casa',
          amount: 1100,
          createdAt: new Date('2022-20-05 08:00:00'),
        },
        {
          id: 3,
          title: 'Fatura',
          type: 'withdraw',
          category: 'cartao',
          amount: 2000,
          createdAt: new Date('2022-10-05 08:00:00'),
        },
        {
          id: 4,
          title: 'PortoNaTela',
          type: 'deposit',
          category: 'dev',
          amount: 1500,
          createdAt: new Date('2022-23-05 08:00:00'),
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      
      return schema.create('transaction', data);

    })

  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
