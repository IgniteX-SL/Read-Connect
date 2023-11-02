import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Initialize isLoading with false
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const login = async ({ email, password, role }) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:8070/user/login', {
        email,
        password,
        role,
      });
      if (response.status === 200) {
        localStorage.setItem('user', JSON.stringify(response.data));
        dispatch({ type: 'LOGIN', payload: response.data });
        setIsLoading(false);
        if (role === 'librarian') {
          navigate('/librarianPanel');
        } else if (role === 'libraryStaff') {
          navigate('/libraryStaffPanel');
        } else if (role === 'member') {
          navigate('/memberPanel');
        } else if (role === 'admin') {
          navigate('/adminPanel');
        }
      } else {
        setIsLoading(false);
        setError(response.data.error);
      }
    } catch (error) {
      setError(() => {
        if (error.response) {
          return error.response.data.error;
        } else {
          return 'An error occurred while signing up.';
        }
      });
    } finally {
      setIsLoading(false);
    }
  };
  return { login, isLoading, error };
};
