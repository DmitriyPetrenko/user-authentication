export const responseHandler = (response) => {
    if (response.status === 201 || response.status === 200) {
        return Promise.resolve(response);
    }
};

export const errorHandler = (error) => Promise.reject(error.response);

export const replacer = (match, group1, group2, group3, group4, group5) => {
    if (~match.search(/(^\w){1}/)) {
        return group1.toUpperCase();
    } else if (~match.search(/\.{1}\s*(\w{1})/)) {
        return `. ${group2.toUpperCase()}`;
    } else if (~match.search(/,{1}\s*(\w{1})/)) {
        return `, ${group3.toLowerCase()}`;
    } else if (~match.search(/\s*’{1}\s*(\w{1})/)) {
        return `’${group4.toLowerCase()}`;
    } else if (~match.search(/\s*(\.{3})\s*/)) {
        return `${group5} `;
    }
};
