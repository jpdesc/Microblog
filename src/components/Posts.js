import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useApi } from '../contexts/ApiProvider';
import Post from './Post';

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export default function Posts() {
    const [posts, setPosts] = useState(null);
    const api = useApi();

    let url;
    switch (content) {
        case 'feed':
        case undefined:
            url = '/feed';
            break;
        case 'explore':
            url = '/posts';
            break
        default:
            url = `/users/${content}/posts`;
            break;
    }


    useEffect(() => {
        (async () => {
            const response = await fetch(BASE_API_URL + '/api/feed');
            if (response.ok) {
                const results = await response.json();

                setPosts(results.data);
            }
            else {
                setPosts(null);
            }
        })();
    }, [api, url]);

    return (
        <>
            {posts === undefined ?
                <Spinner animation="border" />
                :
                <>
                    {posts === null ?
                        <p>Could not retrieve blog posts.</p>
                        :
                        <>
                            {posts.length === 0 ?
                                <p>There are no blog posts.</p>
                                :
                                posts.map(post => <Post key={post.id} post={post} />)
                            }
                        </>
                    }
                </>
            }
        </>
    );
}
