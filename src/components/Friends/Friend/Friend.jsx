import { useSelector } from "react-redux";
import avatar from "../../../Assets/super/avatar1.png";
import "./Friend.scss";

const Friend = () => {
  const { friends, isLoading } = useSelector((state) => state.auth);

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }
  return (
    <>
      {friends.map((friend) => (
        <div className="cards-friend-container">
          <div className="card-friend" key={friend.id}>
              <div className="name-surname">
                <p className="text-name-friend">{friend.name}</p>
                <p className="text-surname-friend">{friend.username}</p>
              </div>
              <div className="email">
                <p className="text-email-friend">{friend.email}</p>
              </div>
              <div className="avatar-friends">
                <img className="picture" src={avatar} alt="avatar" />
              </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Friend;
