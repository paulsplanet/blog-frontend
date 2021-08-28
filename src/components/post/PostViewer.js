import React from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";

const PostViewerBlock = styled(Responsive)`
    margin-top: 4rem;
`;

const PostHead = styled.div`
    border-bottom: 1px solid #a5b1c2;
    padding-bottom: 3rem;
    margin-bottom: 3rem;
    h1 {
        font-size: 3rem;
        line-height: 1.5;
        margin: 0;
    }
`;

const PostContent = styled.div`
    font-size: 1.125rem;
    color: #778ca3;
`;

const PostViewer = ({ post, error, loading }) => {
    if (error) {
        if (error.response && error.response.status === 404) {
            return <PostViewerBlock>This post doesn't exist.</PostViewerBlock>;
        }
        return <PostViewerBlock>There is an Error!</PostViewerBlock>;
    }

    if (loading || !post) {
        return null;
    }

    const { title, body, user, publishedDate, tags } = post;
    return (
        <PostViewerBlock>
            <PostHead>
                <h1>{title}</h1>
                <SubInfo username={user.username} publishedDate={publishedDate} hasMarginTop />
                <Tags tags={tags} />
            </PostHead>
            <PostContent dangerouslySetInnerHTML={{ __html: body }} />
        </PostViewerBlock>
    )
};

export default PostViewer;