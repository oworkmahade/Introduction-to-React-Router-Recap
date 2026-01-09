import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

const UserDetails = () => {
  // access route loader data
  const user = useLoaderData();

  const { id, name, username, email, phone, website, address, company } = user;
  // programmatic navigation
  const navigate = useNavigate();
  // read dynamic url parameters
  const { userId } = useParams();
  console.log(userId);
  // get current url/location info
  const location = useLocation();
  console.log(location);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="max-w-md border rounded-lg shadow-md p-6 m-4">
        <p className="text-xs text-gray-500 mb-2">User ID: {id}</p>

        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-sm text-gray-600">@{username}</p>

        <div className="mt-3 text-sm space-y-1">
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Phone:</strong> {phone}
          </p>
          <p>
            <strong>Website:</strong> {website}
          </p>
        </div>

        <div className="mt-4 text-sm">
          <h3 className="font-semibold">Address</h3>
          <p>
            {address.street}, {address.suite}, {address.city} –{" "}
            {address.zipcode}
          </p>
        </div>

        <div className="mt-4 text-sm">
          <h3 className="font-semibold">Company</h3>
          <p>{company.name}</p>
          <p className="text-gray-600">{company.catchPhrase}</p>
        </div>

        <button
          onClick={handleGoBack}
          className="mt-6 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
