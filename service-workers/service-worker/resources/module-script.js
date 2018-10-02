import './empty-worker.js';
self.onmessage = e => {
  e.source.postMessage('module script');
};
