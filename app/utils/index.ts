import { Routes } from '@/common/enums';
import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/types';
import { redirect } from 'next/navigation';

export function checkUser(
  user: KindeUser<Record<string, string | number | boolean>> | null
) {
  if (!user) {
    return redirect(Routes.REGISTER);
  }
}
