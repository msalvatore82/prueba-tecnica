import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Friend.scss";

const Friend = () => {
  const { friends, isLoading } = useSelector((state) => state.auth);

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }
  return (
    <>
      {friends.map((friend) => (
        <div className="friend-container">
          <div className="card-friend" key={friend.id}>
            <Link>
              <p className="text-name-friend">{friend.name}</p>
              <p className="text-surname-friend">{friend.username}</p>
              <p className="text-email-friend">{friend.email}</p>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Friend;
