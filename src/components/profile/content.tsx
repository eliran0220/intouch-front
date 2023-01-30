import { useState,useEffect } from 'react';
import {faHeart,faComment} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import user_logo from '../../assets/profile/user.png';
import { getAllPostsRelated } from '../../controllers/profile';
import '../../css/content.css';
import { PostData,User } from '../../models/general-models';
import {initialUserState, usePostsDataContext} from '../../utilitis/constants.utilities';
const Content = () => {
    const { posts,setPosts } = usePostsDataContext()
    const [user, setUser] = useState<User>(initialUserState);
    useEffect(() => {
        (async () => {
             const {user,posts} = await getAllPostsRelated();
             console.log(posts)
             posts.sort((prev: PostData, next: PostData) => {return next.created_at_timestamp - prev.created_at_timestamp});
             console.log(posts)
             console.log(user)

             setPosts(posts);
             setUser(user);
        })()
    }, []);   
    return (
        <div className = "content">
            {posts.map((post: PostData,id: number) => (
                <div key = {id} className="feed-post">
                    <div className="feed-post-top">
                        <div className="post-profile-pic">
                            <img className = "profile-pic" src={user_logo} alt=""/>
                        </div>
                        <div className="post-info">
                            <h1>{user.full_name}</h1>
                            <small>{post.created_at_standart}</small>
                        </div>
                    </div>
                    <div className="feed-post-middle">
                        <div className="post-content">
                            <p>{post.post_input}</p>

                        </div>
                    </div>
                    <hr style={{width:'90%', margin:'auto', color:'gray'}}/>
                    <div className="feed-post-buttom">
                        <div className="feed-post-buttom-item">
                            <FontAwesomeIcon icon = {faHeart} className = "feed-post-icon"/>
                            <h2>Like</h2>
                        </div>
                        <div className="feed-post-buttom-item">
                            <FontAwesomeIcon icon = {faComment} className = "feed-post-icon"/>
                            <h2>Comment</h2>
                        </div>
                        </div>
                    </div>
            ))}        
        </div>
    );
};

export default Content;