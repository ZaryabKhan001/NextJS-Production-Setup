import { prisma } from '@lib/prisma';

import { UserProfile } from '../../../generated/prisma/client';

export const retrieveUserProfileFromDatabaseByEmail = async (
  email: UserProfile['email'],
): Promise<UserProfile | null> => {
  return await prisma.userProfile.findUnique({ where: { email } });
};
