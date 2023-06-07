import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const withAuth = (Component) => {
    const AuthenticatedComponent = (props) => {
    const navigate = useNavigate();
    const [user,setUser]= useState('')
    const [alertShown, setAlertShown] = useState(false);

    useEffect(() => {
      axios.get('/auth/check-login')
        .then(response => {
            setUser(response.data.user.username)
            const expirationTime = (response.data.user.exp - response.data.user.iat) * 1000;
            setTimeout(() => {
              
              if (!alertShown) {
                alert('Your session has expired. Please log in again.');
                setAlertShown(true);
              }
            }, expirationTime);
        })
        .catch(error => {
            navigate("/login")
        });
    }, [navigate, alertShown]);


    return <Component {...props} user={user}/>;
  };

  return AuthenticatedComponent;
};

export default withAuth;