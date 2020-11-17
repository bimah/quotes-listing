type ReqArgs = {
  method: string
};

type ReqParams = {
  endpoint: string,
  args: ReqArgs
};

const urlEncode = (obj: Record<string, string>): string => Object.keys(obj).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`).join('&');

  const req = async <T>(params: ReqParams): Promise<T> => {
    const response = await fetch(params.endpoint, params.args);
    const body = await response.json();
    return body;
  };

const Request = {
  get: async <T>(endpoint: string, data?: Record<string, string>): Promise<T> => {
    return fetch(`${endpoint}${data ? `?${urlEncode(data)}` : ''}`, {
      method: 'GET'
    })
      .then(response => response.json())
  }
};

export default Request;
