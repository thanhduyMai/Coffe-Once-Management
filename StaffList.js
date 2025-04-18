import React, { useState } from "react";
import StaffForm from "./StaffForm";

export default function StaffList({ user }) {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Nguyễn Phương Nhi", role: "Pha chế" },
    { id: 2, name: "Mai Thành Duy", role: "Thu ngân" },
  ]);

  const [newEmployee, setNewEmployee] = useState({ name: "", role: "" });
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      // Cập nhật nhân viên
      setEmployees(employees.map(emp =>
        emp.id === editingId ? { ...emp, ...newEmployee } : emp
      ));
      setEditingId(null);
    } else {
      // Thêm nhân viên mới
      const newId = Date.now(); // Giả lập ID
      setEmployees([...employees, { id: newId, ...newEmployee }]);
    }
    setNewEmployee({ name: "", role: "" });
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((e) => e.id !== id));
  };

  return (
    <div className="w-full overflow-x-auto">
       <div className="w-full max-w-7xl mx-auto p-4">
      <h2 className="text-2xl mb-4 text-[#4e342e]">👥 Quản lý nhân viên</h2>
      <p className="text-[#6d4c41] mb-4">
        Xin chào <strong>{user.name}</strong> ({user.role}), đây là danh sách nhân viên.
      </p>

      {/* Form thêm/sửa */}
      <StaffForm
        onSubmit={handleSubmit}
        newEmployee={newEmployee}
        setNewEmployee={setNewEmployee}
        editingId={editingId}
        setEditingId={setEditingId}
      />

      {/* Danh sách nhân viên */}
      <div className="mt-8">
        <table className="w-full min-w-[800px] bg-white rounded-xl shadow-md border border-gray-200">
          <thead className="bg-[#efebe9] text-[#4e342e] text-lg">
            <tr>
              <th className="px-6 py-4 text-left">👤 Họ tên</th>
              <th className="px-6 py-4 text-left">🎓 Vai trò</th>
              <th className="px-6 py-4 text-left">⚙️ Thao tác</th>
            </tr>
          </thead>
          <tbody className="text-base text-gray-700">
            {employees && employees.length > 0 ? (
              employees.map((emp) => (
                <tr key={emp.id} className="border-t hover:bg-[#fbe9e7] transition-all">
                  <td className="px-6 py-3">{emp.name}</td>
                  <td className="px-6 py-3">{emp.role}</td>
                  <td className="px-6 py-3">
                    {/* Nút sửa */}
                    <button
                      onClick={() => {
                        setNewEmployee({
                          name: emp.name,
                          role: emp.role,
                        });
                        setEditingId(emp.id); // Chỉnh sửa nhân viên
                      }}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded-lg text-sm mr-2"
                    >
                      Sửa
                    </button>

                    {/* Nút xóa */}
                    <button
                      onClick={() => deleteEmployee(emp.id)} // Hàm xóa nhân viên
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-6 text-gray-500 text-lg">
                  
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}
