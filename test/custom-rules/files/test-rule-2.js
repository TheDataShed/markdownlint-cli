module.exports = {
  names: ['test-rule-2'],
  description: 'Test rule 2 broken',
  tags: ['test'],
  function: (params, onError) => {
    onError({
      lineNumber: 1
    });
  }
};
