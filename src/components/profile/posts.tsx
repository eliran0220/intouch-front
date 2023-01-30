import { useState } from 'react';
import {faGrin} from '@fortawesome/free-regular-svg-icons'
import {faCamera} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Picker, { EmojiClickData,} from 'emoji-picker-react';
import {apiShareRequest} from '../../controllers/profile'
import {usePostsDataContext} from '../../utilitis/constants.utilities';
import { PostData} from '../../models/general-models';
import '../../css/posts.css';
const Posts = () => {
    const { posts,setPosts } = usePostsDataContext()

    const [postInput,setPostInput] = useState<string>('');
    const [showPicker, setShowPicker] = useState<boolean>(false);
    
    const emojiClick = (emojiData: EmojiClickData, event: MouseEvent) =>{
        console.log("clicked")
        const textAreaElement = document.getElementById('text-area') as any;
        setPostInput(postInput.substr(0, textAreaElement.selectionStart) + emojiData.emoji + postInput.substr(textAreaElement.selectionEnd));
        setShowPicker(false);
    }

    const handleChange = (event: any) => {
        setPostInput(event.target.value)
    }

    const sharePost = async (event: any) => {
        event.preventDefault();
        try {
           const post = await apiShareRequest(postInput);
           const modified_posts = [...posts,post];
           modified_posts.unshift(post)
           setPosts(modified_posts);
           console.log(modified_posts)
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div className = "post">
            <div className="post-top">
                <textarea id="text-area" name="sitelink" className="textarea" value={postInput} onChange={handleChange} placeholder='Care to share? :)'/>
            </div>
            <div className="post-buttom">
                <ul className="post-icons">
                    <li><i><FontAwesomeIcon icon = {faGrin} onClick = {()=>setShowPicker(val => !val)}/></i></li>
                     <li><i><FontAwesomeIcon icon = {faCamera}/></i></li>
                </ul>
                <button className = "share-button" onClick={sharePost}>Share</button>
            </div>
            {showPicker && <Picker onEmojiClick={emojiClick} autoFocusSearch = {false}/>}
        </div>
    );
};

export default Posts;