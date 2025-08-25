'use client';
import { useFormStatus } from 'react-dom';
import { Button } from '../ui/button';

export function SubmitButton() {
  const { pending } = useFormStatus();

  const text = pending ? 'Submitting' : 'Submit';

  return (
    <Button className="w-fit" type="submit" disabled={pending}>
      {text}
    </Button>
  );
}
