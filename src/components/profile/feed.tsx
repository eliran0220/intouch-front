import Posts from './posts';
import Content from './content'
import { PostData} from '../../models/general-models';
import { PostsDataContext } from '../../utilitis/constants.utilities'
import '../../css/feed.css';
import { useState } from 'react';
const Feed = () => {
    const [posts,setPosts] = useState<PostData[]>([]) 
    return (
        <PostsDataContext.Provider value = {{posts, setPosts}}>
            <div className = "feed">
                <Posts/>
                <Content/>
             </div>
        </PostsDataContext.Provider>

    );
};

export default Feed;