import { catchErrors } from 'errors';

export const getCurrentUser = catchErrors((req, res) => {
  res.respond({ currentUser: req.currentUser });
});

export const updateCurrentUser = catchErrors(async (req, res) => {
  const user = req.currentUser;
  const { avatarUrl } = req.body;

  if (avatarUrl !== undefined) {
    user.avatarUrl = avatarUrl;
  }

  await user.save();
  res.respond({ currentUser: user });
});
