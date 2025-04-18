export default function ProfileInfo({ user }) {
    return (
      <div className="p-4">
        <h2 className="text-2xl mb-4 text-[#4e342e]">👤 Thông tin cá nhân</h2>
        <table className="table-auto w-full border">
          <tbody>
            <tr className="border-b">
              <td className="font-semibold p-2">Họ tên</td>
              <td className="p-2">{user.name}</td>
            </tr>
            <tr className="border-b">
              <td className="font-semibold p-2">Vai trò</td>
              <td className="p-2">{user.role}</td>
            </tr>
            <tr>
              <td className="font-semibold p-2">Email</td>
              <td className="p-2">{user.email || "Chưa cập nhật"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  