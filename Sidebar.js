import { useState } from 'react';

const sidebarData = {
  hethong: {
    title: '🛠 Hệ thống',
    role: 'manager', // chỉ manager mới thấy
    children: [
      'Tạo tài khoản người dùng',
      'Phân quyền truy cập',
    ],
  },
  taikhoantaikhoan: {
    title: '🛠 Tài khoản',
    role: 'staff', 
    children: [
      'Thông tin cá nhân',
      'Đổi mật khẩu',
    ],
  },
  danhmuc: {
    title: '📋 Danh mục',
    role: 'manager', // chỉ manager mới thấy
    children: [
      'Nhân viên',
      'Món ăn & đồ uống',
      'Khách hàng',
      'Kho nguyên liệu',
      'Nhà cung cấp',
      'Bàn',
    ],
  },
  hoadon: {
    title: '🧾 Hóa đơn',
    role: 'staff', // cả manager và staff đều thấy
    children: [
      'Tạo đơn hàng',
      'Xử lý thanh toán',
      'Chỉnh sửa / hủy đơn',
      'Xem lịch sử hóa đơn',
      'Khuyến mãi áp dụng',
    ],
  },
  thuchi: {
    title: '💰 Thu chi',
    role: 'manager', // chỉ manager mới thấy
    children: [
      'Tạo phiếu thu',
      'Tạo phiếu chi',
      'Ghi chú giao dịch',
    ],
  },
  baocao: {
    title: '📈 Báo cáo',
    role: 'manager', // chỉ manager mới thấy
    children: [
      'Doanh thu theo ngày / tháng',
      'Phân tích đơn hàng',
      'Báo cáo công nợ',
      'Khấu hao thiết bị',
      'Xuất file Excel / PDF',
    ],
  },
};

export default function Sidebar({ onSelect, user }) {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (key) => {
    setOpenMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!user) {
    return (
      <aside className="sidebar">
        <h1 className="logo">☕ Coffee Once</h1>
        <div className="p-4">Vui lòng đăng nhập</div>
      </aside>
    );
  }

  const isManager = user.role === 'manager';

  return (
    <aside className="sidebar">
      <h1 className="logo">☕ Coffee Once</h1>
      <nav>
        {Object.entries(sidebarData)
          .filter(([_, section]) => {
            // manager thì thấy hết, staff thì chỉ thấy role staff
            return isManager || section.role === 'staff';
          })
          .map(([key, section]) => (
            <div key={key}>
              <button
                onClick={() => toggleMenu(key)}
                className="w-full text-left px-4 py-2 hover:bg-[#5d4037] font-semibold"
              >
                {section.title}
              </button>
              {openMenus[key] && (
                <ul className="ml-4 mt-1 space-y-1">
                  {section.children.map((item, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => onSelect(item)}
                        className="text-sm text-left px-4 py-1 hover:bg-[#6d4c41] rounded w-full"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
      </nav>
    </aside>
  );
}
