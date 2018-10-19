export const responseHandler = (response) => {
    console.log(response);
    if (response.ok) {
        if (response.status === 201) {
            return Promise.resolve(response);
        }
    }
};

export const errorHandler = (error) => {
    console.log(error.response);
    return Promise.reject(error.response);
};
