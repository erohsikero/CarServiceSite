import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const VideoGallery = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        setVideos(importAll(require.context('../../../public/Gallery/Videos', true, /\.(mp4)$/)))
    }, [])

    const importAll = (r) => {
        const videos = [];

        r.keys().map((item, index) => {
            item = item.slice(1);
            videos.push(
                <video width="320" height="240" controls style={{ margin: "0.5rem" }}>
                    <source src={`/Gallery/Videos${item}`} type="video/mp4"></source>
                </video>
            )
        })

        return videos;
    }

    return (
        <Container>
            <h1 style={{ margin: "3rem"}}>VIDEOS</h1>
            {videos}
        </Container>
    )
}
export default VideoGallery;