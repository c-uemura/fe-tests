import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button';
import Title from '@/components/Title';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    const getUser = async () => {
      let login = await axios.post('/login', { user: 'test' });
      if (login) {
        let res = await axios.get('/user');
        if (res.data) {
          setUser(res.data.username);
        }
      }
    };
    getUser();
  }, []);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/settings');
  };
  return (
    <div>
      <Title title="Home" />
      <Button
        label="go to Settings"
        onClick={handleClick}
        testID="settings-button"
      />
      <p>{user}</p>
    </div>
  );
};
export default Home;
