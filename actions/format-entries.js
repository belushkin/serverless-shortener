/**
 * Format the Cloudant documents to be consumed by the user interface
 */
function main(params) {
    return {
        entries: params.rows.map((row) => { return {
            url: row.doc.url,
            short: row.doc.short,
            createdAt: row.doc.createdAt
        }})
};
}
