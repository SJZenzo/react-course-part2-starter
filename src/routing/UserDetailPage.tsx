import { useLocation, useParams, useSearchParams } from "react-router-dom";
import UserList from "./UserList";

const UserDetailPage = () => {
  const params = useParams();
  const [serchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  return (
    <div>
      <UserList />
      <p>User {params.id}</p>
    </div>
  );
};

export default UserDetailPage;
