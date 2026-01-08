import { useNavigate } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, username, email } = user;
  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate(`/users/${id}`);
  };

  return (
    <div className="">
      <div className="max-w-sm border rounded-lg shadow-md p-8">
        <p className="text-xs text-gray-500 mb-2">ID: {id}</p>
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-sm text-gray-600">@{username}</p>
        <p className="text-sm">{email}</p>

        <button
          onClick={handleShowDetails}
          className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Show Details
        </button>
      </div>
    </div>
  );
};

export default User;
