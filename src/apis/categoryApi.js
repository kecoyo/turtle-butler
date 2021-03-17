import request from '../lib/request';

const categoryApi = {
  list: () => request.get('/category/list'),
  detail: (id) => request.get('/category/detail', { id }),
  add: (data) => request.post('/category/add', data),
  update: (data) => request.post('/category/update', data),
  saveList: (data) => request.post('/category/saveList', data),
};

export default categoryApi;
