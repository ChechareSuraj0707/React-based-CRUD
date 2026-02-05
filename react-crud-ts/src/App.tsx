import { useEffect, useState } from "react";

import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

import { fetchUsers, addUser, editUser, removeUser } from "./api/userApi";

import type { User } from "../src/types/user";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [editUserData, setEditUserData] = useState<User | null>(null);

  const loadUsers = async () => {
    const res = await fetchUsers();
    setUsers(res.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSubmit = async (data: User) => {
    if (editUserData) {
      await editUser(editUserData.id!, data);
      setEditUserData(null);
    } else {
      await addUser(data);
    }

    loadUsers();
  };

  const handleDelete = async (id: number) => {
    await removeUser(id);
    loadUsers();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            User Management System
          </h1>
          <p className="text-gray-300 text-lg">
            Manage your users efficiently and elegantly
          </p>
        </div>

        <UserForm
          onSubmit={handleSubmit}
          defaultValues={editUserData || undefined}
        />

        <UserList
          users={users}
          onEdit={setEditUserData}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
