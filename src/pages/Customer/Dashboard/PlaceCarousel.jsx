import React from 'react'
import Carousel from 'better-react-carousel'


const PlaceCarousel = () => {
    return (
        <Carousel cols={2} rows={1} gap={10} loop showDots>
            <Carousel.Item>
                <img width="100%" src="https://picsum.photos/800/600?random=1" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://picsum.photos/800/600?random=2" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://picsum.photos/800/600?random=3" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://picsum.photos/800/600?random=3" />
            </Carousel.Item>
        </Carousel>
    )
}

export default PlaceCarousel