import React from 'react';

const IconSwitch = ({ icon, onSwitch }) => (
  <i className="material-icons icon-switch" onClick={onSwitch}>
    {icon}
  </i>
);

export default IconSwitch;
