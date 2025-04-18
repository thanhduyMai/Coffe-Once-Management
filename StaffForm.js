import React from "react";

export default function StaffForm({
  onSubmit,
  newEmployee,
  setNewEmployee,
  editingId,
  staffList = [],
  setEditingId,
  deleteEmployee,
}) {
  return (
    <div className="p-8 w-full">
      {/* Bảng danh sách nhân viên */}
      <div className="overflow-x-auto w-full">
        <table className="w-full min-w-[1000px] bg-white rounded-2xl shadow-xl">
          
          <tbody className="text-gray-700 text-lg">
            {staffList.length > 0 ? (
              staffList.map((staff, index) => (
                <tr
                  key={staff.id}
                  className="border-t hover:bg-gray-100 transition-all"
                >
                  <td className="px-8 py-5 text-center">{index + 1}</td>
                  <td className="px-8 py-5">{staff.name}</td>
                  <td className="px-8 py-5">{staff.username || "-"}</td>
                  <td className="px-8 py-5">
                    <span
                      className={`px-4 py-2 rounded-full text-white font-semibold text-sm ${
                        staff.role === "Manager"
                          ? "bg-purple-700"
                          : staff.role === "Thu ngân"
                          ? "bg-pink-500"
                          : "bg-green-500"
                      }`}
                    >
                      {staff.role}
                    </span>
                  </td>
                  <td className="px-8 py-5">{staff.createdAt || "-"}</td>
                  <td className="px-8 py-5 text-center space-x-4">
                    <button
                      onClick={() => {
                        setNewEmployee({
                          name: staff.name,
                          role: staff.role,
                        });
                        setEditingId(staff.id);
                      }}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg text-sm"
                    >
                      Sửa
                    </button>
                    <button
                      onClick={() => deleteEmployee(staff.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg text-sm"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-12 text-gray-400 text-xl">
                  
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Form thêm/sửa nhân viên */}
      <form
        onSubmit={onSubmit}
        className="flex flex-wrap gap-6 items-center justify-center mt-10"
      >
        <input
          type="text"
          placeholder="Tên nhân viên"
          value={newEmployee.name}
          onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
          className="border border-gray-300 p-4 rounded-lg w-80 text-lg"
          required
        />
        <input
          type="text"
          placeholder="Vai trò (ví dụ: Pha chế, Thu ngân)"
          value={newEmployee.role}
          onChange={(e) => setNewEmployee({ ...newEmployee, role: e.target.value })}
          className="border border-gray-300 p-4 rounded-lg w-80 text-lg"
          required
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold"
        >
          {editingId ? "Lưu" : "Thêm"}
        </button>
      </form>
    </div>
  );
}
