import { useNavigate } from 'react-router-dom';
const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <button onClick={handleNavigateHome}>Go to Home</button>
    </div>
  );
};
export default NotFoundPage;
