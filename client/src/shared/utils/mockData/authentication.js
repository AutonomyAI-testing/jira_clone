export const authenticationData = {
  authToken: `mock-jwt-token-${Math.random()
    .toString(36)
    .substring(7)}`,
};

export const loginData = (email, password) => {
  // Simple mock validation: any email/password combination works
  // In a real app, this would be validated on the backend
  if (!email || !password) {
    return null; // Will trigger error handling in router
  }
  return {
    authToken: `mock-jwt-token-${Math.random()
      .toString(36)
      .substring(7)}`,
  };
};
