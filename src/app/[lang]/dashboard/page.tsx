import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@shared/components/ui/card';

import { retrieveUserProfileFromDatabaseByEmail } from '@/features/user-profile/user-profile.model';

export default async function Dashboard() {
  const user =
    await retrieveUserProfileFromDatabaseByEmail('jan@reactsquad.io');

  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
      </CardHeader>
      <CardContent>
        {user ? (
          <ul>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
          </ul>
        ) : (
          <p>User not found.</p>
        )}
      </CardContent>
    </Card>
  );
}
