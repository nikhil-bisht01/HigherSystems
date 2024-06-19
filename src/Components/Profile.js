import React, { useEffect, useState } from 'react';

const UserProfile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch('http://localhost:5000/profile');
      const data = await response.json();
      setProfile(data);
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Address: {profile.address}</p>
    </div>
  );
};

export default UserProfile;
