import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';


export default function Posts() {
    const [posts, setPosts] = useState();

    return (
        <>
            {posts === undefined ?
                <Spinner animation="border" />
                :
                <>
                    ...
                </>
            }
        </>
    );
}
