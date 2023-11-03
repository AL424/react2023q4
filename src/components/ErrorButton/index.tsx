import { FC, useState } from 'react';
import './index.scss';

export const ErrorButton: FC = () => {
  const [error, setError] = useState(false);

  if (error) throw new Error('Sorry, but you broke the app yourself');

  return (
    <button
      type="button"
      className="error-button"
      onClick={() => setError(true)}
    >
      break app
    </button>
  );
};
