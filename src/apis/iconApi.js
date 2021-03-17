import request from '../lib/request';

const iconApi = {
  list: () => request.get('/icon/list'),
};

export default iconApi;
