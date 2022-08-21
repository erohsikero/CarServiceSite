import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ReactImageGallery from "react-image-gallery";

const ImageGallery = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(importAll(require.context('../../../public/Gallery/Photos', true, /\.(png|jpe?g|svg)$/)))
    }, [])

    const importAll = (r) => {
        const images = [];

        r.keys().map((item, index) => {
            images.push({
                "original": r(item),
                "thumbnail": r(item)
            })
        })

        return images;
    }

    return (
        <Container>
            <h1 style={{margin: "3rem"}}>IMAGES</h1>
            <ReactImageGallery items={images} />
        </Container>
    )
}

export default ImageGallery;