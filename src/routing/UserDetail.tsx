import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  const params = useParams();
  const [serchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  return (
    <div>
      <p>User {params.id}</p>
    </div>
  );
};

export default UserDetailPage;
