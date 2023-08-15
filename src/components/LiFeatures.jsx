import React from 'react';

const LiFeatures = ({handleFeatures, features}) => {
  return (
    <li className='li-features' onClick={handleFeatures}>
        Features
        <span class="material-symbols-outlined">
          {features ? 'expand_Less' : 'expand_more'}
        </span>
    </li>
  )
};

export default LiFeatures;
