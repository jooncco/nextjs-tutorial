import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({postData}) {
    return <Layout>
        <h2>{postData.title}</h2>
        {postData.id}
        <br />
        {postData.date}
        <br /><br />
        <div dangerouslySetInnerHTML={{ __html : postData.contentHtml }} />
    </Layout>;
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        }
    };
}