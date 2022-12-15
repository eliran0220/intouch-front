import bgVideo from '../../assets/homepage/background_vid.mp4';

import '../../css/homepage.css';
const BgVideo = () => {
    return (
        <div className = "video-container">
            <video
                src={bgVideo}
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