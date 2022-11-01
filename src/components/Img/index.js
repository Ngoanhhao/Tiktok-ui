import { useState } from 'react';
import Images from '../../assets/Images';

function Img({ src, className, Fallback = Images.avatar,...props}) {
    var [imgsrc, setimgsrc] = useState('');
    var handleError = () => {
        setimgsrc(Fallback);
    };
    console.log(src);
    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
            {...props}
            src={imgsrc || src}
            onError={handleError}
        />
    );
}

export default Img;
