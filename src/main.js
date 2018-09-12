import App from './App.html';

const app = new App({
  target: document.getElementById('rehydrateContainer'),
  hydrate: true,
  data: {
    text: 'rehydrated'
  }
});

export default app;
