export const client = async (url, { body, ...customConfig }) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig.method,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, config);

    if (!response.ok) throw new Error('failed to fetch');

    return await response.json();
  } catch (err) {
    return Promise.reject(err);
  }
};

client.get = function (url, customConfig = {}) {
  return client(url, customConfig);
};
