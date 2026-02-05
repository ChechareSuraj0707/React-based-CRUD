import type { User } from "../types/user";

interface Props {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

export default function UserList({ users, onEdit, onDelete }: Props) {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl shadow-2xl border border-slate-600">
      <h2 className="text-2xl font-bold mb-6 text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text">
        Users Directory
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-slate-700 to-slate-600 border-b-2 border-slate-500">
              <th className="p-4 text-left font-bold text-gray-200">
                First Name
              </th>
              <th className="p-4 text-left font-bold text-gray-200">
                Last Name
              </th>
              <th className="p-4 text-left font-bold text-gray-200">Phone</th>
              <th className="p-4 text-left font-bold text-gray-200">Email</th>
              <th className="p-4 text-left font-bold text-gray-200">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u, idx) => (
              <tr
                key={u.id}
                className={`border-b border-slate-600 transition duration-200 hover:bg-slate-700/50 ${idx % 2 === 0 ? "bg-slate-800/50" : "bg-slate-700/30"}`}
              >
                <td className="p-4 text-gray-100 font-medium">{u.firstName}</td>

                <td className="p-4 text-gray-100 font-medium">{u.lastName}</td>

                <td className="p-4 text-gray-300">{u.phone}</td>

                <td className="p-4 text-gray-300">{u.email}</td>

                <td className="p-4 space-x-2">
                  <button
                    onClick={() => onEdit(u)}
                    className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition duration-200 transform hover:scale-105"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(u.id!)}
                    className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-red-600 hover:to-pink-600 transition duration-200 transform hover:scale-105"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {users.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">
            No users yet. Add one to get started!
          </p>
        </div>
      )}
    </div>
  );
}
