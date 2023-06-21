import { get } from '../utils/request';

export const getRolesIdAPI = params => get('/roles/findRoles', params);