/**
 * Prepare the shortener entry to be persisted
 */
const md5 = require('spark-md5');

/**
 * Prepare the shortener entry to be persisted
 */
function main(params) {
    if (!params.url) {
        return Promise.reject({ error: 'no url'});
    }

    return {
        doc: {
            createdAt: new Date(),
            url: params.url,
            short: md5.hash(params.url.trim().toLowerCase())
        }
    };
}
