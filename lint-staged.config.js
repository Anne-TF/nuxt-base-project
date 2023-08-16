module.exports = {
    '*.{ts,tsx}': [
        () => 'yarn lint:fix',
        () => 'yarn ts:check'
    ]
};
