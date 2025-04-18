import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LoginPage.css'; 

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!username || !password || !confirmPassword) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }
    if (password !== confirmPassword) {
      alert('Mật khẩu xác nhận không khớp!');
      return;
    }

    // Ở đây thường sẽ call API để lưu tài khoản mới
    // Hiện tại mình chỉ mô phỏng, sau khi đăng ký xong tự chuyển về Login
    alert('Đăng ký thành công! Bạn có thể đăng nhập.');
    navigate('/login');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">☕ Coffee Once - Đăng ký</h2>

        <div className="login-form-group">
          <label className="login-label">Tên đăng nhập</label>
          <input
            type="text"
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nhập tên đăng nhập"
          />
        </div>

        <div className="login-form-group">
          <label className="login-label">Mật khẩu</label>
          <input
            type="password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nhập mật khẩu"
          />
        </div>

        <div className="login-form-group">
          <label className="login-label">Xác nhận mật khẩu</label>
          <input
            type="password"
            className="login-input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Nhập lại mật khẩu"
          />
        </div>

        <button onClick={handleRegister} className="login-button">
          Đăng ký
        </button>

        {/* Quay lại login */}
        <p className="text-center mt-4">
          Đã có tài khoản?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Đăng nhập
          </Link>
        </p>

      </div>
    </div>
  );
}
