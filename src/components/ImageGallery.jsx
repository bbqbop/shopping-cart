import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ImageGallery.css'

import { useState, useRef } from 'react';

export default function ImageGallery({ images, name, index }) {
    const [curPos, setCurPos] = useState(0);
    const imageStripRef = useRef(null);
    const imgLinksRef = useRef(null);
    const picSize = 250;

    function moveLeft(){
        let newPos = (curPos + 1) > 0 ? (-images.length) + 1 : curPos + 1;
        setCurPos(newPos);
        moveStrip(newPos);
    }

    function moveRight(){
        let newPos = (curPos - 1) < (-images.length) + 1 ? 0 : curPos - 1;
        setCurPos(newPos);
        moveStrip(newPos);
    }

    function handleImgLink(e){
        let newPos = -parseInt(e.target.dataset.idx);
        setCurPos(newPos);
        moveStrip(newPos);
    }

    function moveStrip(newPos){
        const imgLinks = imgLinksRef.current.querySelectorAll('.imgLink');
        imgLinks.forEach(link => {
            -link.dataset.idx === newPos ? link.classList.add('active') : link.classList.remove('active');
        })
        const imageStrip = imageStripRef.current;
        imageStrip.style.transform = `translateX(${newPos * picSize}px)`
    }


  return (
    <div className="imageGallery">
        <div className="imageStrip" ref={imageStripRef}>
            {images.map((image, index) => (
                <img
                src={image}
                key={name + index}
                alt={'Photo of ' + name + index}
                />
            ))}
        </div>
        <div className="imageNav">
            <FontAwesomeIcon icon={faCaretLeft} onClick={moveLeft} />
            <div className="imgLinks" ref={imgLinksRef}>
                {images.map((image, index) => (
                <div
                    className={`imgLink ${index === 0 ? 'active' : ''}`}
                    key={index}
                    data-idx={index}
                    onClick={handleImgLink}
                />
                ))}
            </div>
            <FontAwesomeIcon icon={faCaretRight} onClick={moveRight} />
            </div>
    </div>
  );
}
