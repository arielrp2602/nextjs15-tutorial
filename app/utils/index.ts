import { Routes } from '@/common/enums';
import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/types';
import { redirect } from 'next/navigation';

const defaultDateFormat: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export function checkUser(
  user: KindeUser<Record<string, string | number | boolean>> | null
) {
  if (!user) {
    return redirect(Routes.REGISTER);
  }
}

export function formatDateTime(
  date: Date,
  region: string = 'en-US',
  format: Intl.DateTimeFormatOptions = defaultDateFormat
) {
  return new Intl.DateTimeFormat(region, format).format(date);
}
