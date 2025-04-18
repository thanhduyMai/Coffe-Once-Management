import { useState } from "react";

export default function ChangePassword({ user, onPasswordChange }) {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [message, setMessage] = useState("");

  const handleChangePassword = (e) => {
    e.preventDefault();

    const defaultPassword = user.role === "Manager" ? "abc" : "123";

    if (oldPass !== defaultPassword) {
      return setMessage("❌ Mật khẩu cũ không đúng");
    }

    if (newPass !== confirmPass) {
      return setMessage("❌ Mật khẩu mới không khớp");
    }

    // Call parent handler (tùy bạn muốn lưu như thế nào)
    onPasswordChange(newPass);
    setMessage("✅ Đổi mật khẩu thành công!");
    setOldPass("");
    setNewPass("");
    setConfirmPass("");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      
      <form onSubmit={handleChangePassword} className="space-y-4">
        <input
          type="password"
          placeholder="Mật khẩu cũ"
          className="w-full border p-2 rounded"
          value={oldPass}
          onChange={(e) => setOldPass(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mật khẩu mới"
          className="w-full border p-2 rounded"
          value={newPass}
          onChange={(e) => setNewPass(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Xác nhận mật khẩu mới"
          className="w-full border p-2 rounded"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-[#4e342e] text-white p-2 rounded">
          Đổi mật khẩu
        </button>
      </form>
      {message && <p className="mt-2 text-center">{message}</p>}
    </div>
  );
}
