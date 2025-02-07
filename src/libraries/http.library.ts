import axios from 'axios';

export function get<T>(url: string): Promise<T> {
  return axios.get(url).then(data => data.data);
}
