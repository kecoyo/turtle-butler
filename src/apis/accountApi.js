import request from '../lib/request';

const accountApi = {
  list: (params) => request.get('/account/list', params),
  detail: (id) => request.get('/account/detail', { id }),
  add: (data) => request.post('/account/add', data),
  update: (data) => request.post('/account/update', data),
  saveList: (data) => request.post('/account/saveList', data),
  uploadPicture: (filePath) => request.uploadFile('/account/uploadPicture', 'file', filePath),
};

export default accountApi;
