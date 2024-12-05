import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate, useLocation } from "react-router-dom";

const CreateUser = () => {
  const { addUser, updateUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    age: "",
    profession: "",
    gender: "",
  });

  useEffect(() => {
    if (location.state?.user) {
      setUser(location.state.user);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.id) {
      updateUser(user);
    } else {
      addUser(user);
    }
    navigate("/");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url('https://raw.githubusercontent.com/CiurescuP/LogIn-Form/main/bg.jpg')`,
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="h-[740px] w-[600px] bg-white/10 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-[17px] backdrop-blur-[5px] border-[5px] border-white/10 shadow-[0_0_40px_rgba(129,236,174,0.6)] p-5"
      >
        <h3 className="text-center text-2xl font-semibold text-white mb-6">
          {user.id ? "Edit User" : "Add New User"}
        </h3>

        <div className="mb-4">
          <label htmlFor="first_name" className="block text-white font-medium">
            First Name
          </label>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={user.first_name}
            onChange={handleChange}
            required
            className="mt-2 w-full px-4 py-2 bg-white/20 text-white rounded-md outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="last_name" className="block text-white font-medium">
            Last Name
          </label>
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={user.last_name}
            onChange={handleChange}
            required
            className="mt-2 w-full px-4 py-2 bg-white/20 text-white rounded-md outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block text-white font-medium">
            Age
          </label>
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={user.age}
            onChange={handleChange}
            required
            className="mt-2 w-full px-4 py-2 bg-white/20 text-white rounded-md outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="profession" className="block text-white font-medium">
            Profession
          </label>
          <input
            type="text"
            name="profession"
            placeholder="Profession"
            value={user.profession}
            onChange={handleChange}
            required
            className="mt-2 w-full px-4 py-2 bg-white/20 text-white rounded-md outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="gender" className="block text-white font-medium">
            Gender
          </label>
          <select
            name="gender"
            value={user.gender}
            onChange={handleChange}
            required
            className="mt-2 w-full px-4 py-2 bg-white/20 text-white rounded-md outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="Male" className="text-black">
              Male
            </option>
            <option value="Female" className="text-black">
              Female
            </option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-md transition duration-200"
        >
          {user.id ? "Update" : "Create"}
        </button>
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
      </form>
    </div>
  );
};

export default CreateUser;
