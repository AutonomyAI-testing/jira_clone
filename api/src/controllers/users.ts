import User from 'entities/User';
import { catchErrors } from 'errors';

export const getCurrentUser = catchErrors((req, res) => {
  res.respond({ currentUser: req.currentUser });
});

export const updateUser = catchErrors(async (req, res) => {
  const { avatarUrl } = req.body;
  const user = req.currentUser as User;

  if (avatarUrl !== undefined) {
    user.avatarUrl = avatarUrl;
  }

  await user.save();
  res.respond({ currentUser: user });
});
