import React, {useContext} from 'react'
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Users = () => {
    const { users, deleteUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleDelete = (userId) => {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this user?"
      );
      if (confirmDelete) {
        deleteUser(userId);
      }
    };
  return (
    <div className="min-h-screen bg-[#9ef01a] p-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#004b23]">
        Information of Users
      </h2>
      {/* <button
        onClick={() => navigate("/create-user")}
        className="bg-[#004b23] text-white px-4 py-2 rounded hover:bg-[#38b000] mb-6"
      >
        Add new User
      </button> */}
      {users.length > 0 ? (
        users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded p-4 mb-4 flex justify-between items-center"
          >
            <div>
              <h3 className="text-xl font-semibold text-[#03045e]">
                {user.first_name} {user.last_name}
              </h3>
              <p className="text-gray-600">Age: {user.age}</p>
              <p className="text-gray-600">Profession: {user.profession}</p>
              <p className="text-gray-600">Gender: {user.gender}</p>
              <p className="text-gray-600">ID: {user.id}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => navigate("/create-user", { state: { user } })}
                className="bg-[#38b000] text-white px-4 py-2 rounded hover:bg-[#76d473]"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className="bg-[#d90429] text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">There are no users yet</p>
      )}
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => navigate("/")}
          className="bg-[#004b23] text-white px-6 py-3 rounded-md font-medium hover:bg-[#76d473] focus:outline-none focus:ring-2 focus:ring-[#76d473]"
        >
          Go to Home
        </button>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-600 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 ml-4"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Users