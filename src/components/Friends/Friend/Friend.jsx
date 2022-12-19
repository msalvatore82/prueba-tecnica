import { useSelector } from "react-redux";
import avatar from "../../../Assets/super/avatar1.png";
import "./Friend.scss";

const Friend = () => {
  const { friends, isLoading } = useSelector((state) => state.auth);

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }
  return (
    <div className="card-container-friends">
      {friends.map((friend) => (
        <div key={friend.id} className="card-friend">
          <div className="name-avatar">
            <p className="text-name-friend">{friend.name} </p>
            <img className="picture avatar-friends" src={avatar} alt="avatar" />
          </div>
          <div className="email-surname">
            <p className="text-surname-friend">{friend.username}</p>
            <p className="text-email-friend">{friend.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Friend;
