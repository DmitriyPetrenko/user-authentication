export const responseHandler = (response) => {
    if (response.status === 201 || response.status === 200) {
        return Promise.resolve(response);
    }
};

export const errorHandler = (error) => Promise.reject(error.response);

export const replacer = (str, param, offset, currentStr) => {
    if (~currentStr.search(/(^\w{1})/)) {
        return str.toUpperCase();
    }
};
