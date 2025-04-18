export default function Header({ user, onLogout }) {
  return (
    <header className="header bg-[#4e342e] text-white flex justify-between items-center px-6 py-3 shadow">
      <h1 className="text-2xl font-bold">CoffeeCloud</h1>
      <div className="flex items-center space-x-4">
        <span>Xin chào, <strong>{user.name}</strong> ({user.role})</span>
        <button
          onClick={onLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Đăng xuất
        </button>
      </div>
    </header>
  );
}
