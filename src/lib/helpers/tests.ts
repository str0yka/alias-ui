export const getTestProps = (id: string) => ({
  ...(import.meta.env.MODE === 'test' && { 'data-testid': id })
});
