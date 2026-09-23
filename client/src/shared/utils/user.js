// A user carries a single `name` field (e.g. "Lord Gaben"). Split it on the first
// space so the first and last name can be used to build the display name.
const splitName = name => {
  const [firstName, ...rest] = `${name || ''}`.trim().split(' ');
  return { firstName, lastName: rest.join(' ') };
};

export const getDisplayName = user => {
  if (!user) return '';
  const { firstName, lastName } = splitName(user.name);
  return [firstName, lastName].filter(Boolean).join(' ');
};
