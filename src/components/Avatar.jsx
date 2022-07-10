import React from 'react';
// import { useAuthContext } from '../hooks/useAuthContext';

// styles
import './Avatar.css';

function Avatar({ src }) {
  //   const { user } = useAuthContext();
  return (
    <div className="avatar">
      <img src={src} alt="user avatar" />
    </div>
  );
}

export default Avatar;
