import queryString from 'query-string';
/**
 *
 *
 * @param {object} [options]
 * @param {number} [options.Page]
 * @param {number} [options.results]
 * @param {string} [options.format]
 */
export const getUsers = (options = {}) => {
  const defaultOptions = {
    page: 1,
    results: 10,
    format: 'json',
    seed: 'FE2020-2',
    inc: ['name', 'email', 'gender', 'login'],
  };
  const finalOptions = {
    ...defaultOptions,
    ...options,
  };

  const query = queryString.stringify(finalOptions, { arrayFormat: 'comma' });
  console.log(query);
  return fetch(`https://randomuser.me/api/?${query}`).then(res => res.json());
};
