import StaffList from './StaffList'
import ProfileInfo from './ProfileInfo'
import ChangePassword from './ChangePassword'
export default function MainContent({ section, user }) {
  if (!user) {
    return (
      <div className="section">
        <div className="welcome">
          <h2>Chào mừng bạn đến với hệ thống Coffee Once</h2>
          <p>Vui lòng đăng nhập để sử dụng chức năng.</p>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (section) {
      case 'Phân quyền truy cập':
        return (
          <>
            <h2 className="text-2xl mb-4 text-[#4e342e]">👨‍💼 Phân quyền nhân viên</h2>
            <p className="text-[#6d4c41]">
              Xin chào <strong>{user.name}</strong> ({user.role}), đây là chức năng phân quyền nhân viên.
            </p>
            {/* Ở đây sẽ làm CRUD phân quyền */}
          </>
        );
      case 'Nhân viên':
        return (
          <>
            <StaffList user={user} />
          </>
        );
      // Thêm các section khác tùy vào Sidebar
      case 'Đổi mật khẩu':
        return (
          <>
          <h2 className="text-2xl mb-4 text-[#4e342e]">🔒 Đổi mật khẩu</h2>
          <p className="text-[#6d4c41]">
           Xin chào <strong>{user.name}</strong> ({user.role}), vui lòng nhập mật khẩu cũ và mật khẩu mới để đổi.
          </p>
          <ChangePassword user={user} onPasswordChange={(newPass) => console.log("New password:", newPass)} />
         </>
          );
      case 'Thông tin cá nhân':
        return (
          <>
          <ProfileInfo user={user} />
         </>
          );

      default:
        return (
          <>
            <h2 className="text-2xl mb-4 text-[#4e342e]">{section}</h2>
            <p className="text-[#6d4c41]">
              Xin chào <strong>{user.name}</strong> ({user.role}),
              đây là nội dung cho mục: <strong>{section}</strong>.
            </p>
          </>
        );
    }
  };

  return (
    <div className="section">
      {section ? renderContent() : (
        <div className="welcome">
          <h2>Chào mừng {user.name} đến với hệ thống Coffee Once</h2>
          <p>Vui lòng chọn một chức năng từ menu bên trái để bắt đầu quản lý.</p>
        </div>
      )}
    </div>
  );
}
