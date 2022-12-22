import { getAllFriends } from '../features/auth/authSlice';
export interface Post  {
    id: number;
    userId: number;
    title: string;
    body: string;
  }
  
  export interface InitialState  {
    posts: Post[];
    isLoading: boolean;
    post: Post;
  }

  export default interface FriendTypes  {
    id: number;
    lat:string,
    lng: string;
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: string;
    name: string;
    catchPhrase: string;
    bs: string;
    username: string;
    email: string;
    address: string;
    phone: string;
    website: string;
    company: string;
  }
  export interface InitialStateUser  {
    user:string
    friends: [],
    friend: FriendTypes,
    
  }
  
  export interface PostType  {
    posts: Array <Post>;
    getAllPosts: (value: Array<Post>) => void;
    destroyPostById: (id: number) => void;
    getPostById: (value: Array<Post>) => void;
    getAllFriends: (value: Array<FriendTypes>) => void;
    modal: boolean;
    setModal: (value: boolean) => void;
  };