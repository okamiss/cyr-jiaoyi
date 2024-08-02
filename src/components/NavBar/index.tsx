import React from 'react';
import { NavBar } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <NavBar onBack={() => navigate(-1)}>My Mobile App</NavBar>
  );
};

export default NavigationBar;
