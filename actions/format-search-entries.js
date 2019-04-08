/**
 * Format the Cloudant documents to be consumed by the user interface for search query
 */
function main(params) {
    return {
        entries: params.docs.map((row) => { return {
            url: row.url,
            short: row.short,
            createdAt: row.createdAt
        }})
};
}