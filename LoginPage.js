import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './LoginPage.css'; 

export default function LoginPage({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'manager' && password === 'abc') {
      setUser({ name: 'Manager', role: 'manager' });
      navigate('/');
    } else if (username === 'staff' && password === '123') {
      setUser({ name: 'Staff', role: 'staff' });
      navigate('/');
    } else {
      alert('Sai tài khoản hoặc mật khẩu!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">☕ Coffee Once - Đăng nhập</h2>
        <div className="login-form-group">
          <label className="login-label">Tên đăng nhập</label>
          <input
            type="text"
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
          />
        </div>
        <div className="login-form-group">
          <label className="login-label">Mật khẩu</label>
          <input
            type="password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </div>
        <button onClick={handleLogin} className="login-button">
          Đăng nhập
        </button>

        <p className="text-center mt-4">
          Chưa có tài khoản?{' '}
          <Link to="/register" className="text-blue-500 hover:underline">
            Đăng ký
          </Link>
        </p>
      </div>
    </div>
  );
}
