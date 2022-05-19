import { useRouter } from 'next/router';

const Blog = () => {
    const router = useRouter();
    const {blog} = router.query
    return <div> Title: {blog}!</div>;
}

export default Blog