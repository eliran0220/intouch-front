import bgVideo from '../../assets/homepage/background_vid.mp4';
import bg_video from '../../assets/homepage/bg_video.mp4';

import '../../css/homepage.css';
const BgVideo = () => {
    return (
        <div className = "video-container">
            <video
                src={bg_video}
                typeof="video/mp4"
                loop
                muted
                autoPlay
                className = "video"
            ></video>
        </div>

    );
};


export default BgVideo;