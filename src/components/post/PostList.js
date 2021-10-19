import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import Responsive from "../common/Responsive";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";
import { Link } from "react-router-dom";

const PostListBlock = styled(Responsive)`
    margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
    padding-top: 3rem;
    padding-bottom: 3rem;
    &:first-child {
        padding-top: 0;
    }
    & +& {
        border-top: 1px solid #d1d8e0;
    }
    h2 {
        font-size: 2rem;
        margin-bottom: 0;
        margin-top: 0;
        &:hover {
            color: #4b6584;
        }
    }
    p {
        margin-top: 2rem;
    }
`;

const PostButton = styled(Button)`
    font-size: 1.125rem;
    width: 170px;
    padding: 0.45rem 0;
    display: flex;
    justify-content: center;
`;


const PostItem = ({ post }) => {
    const { publishedDate, user, tags, title, body, _id } = post;
    return (
        <PostItemBlock>
            <h2>
                <Link to={`/@${user.username}/${_id}`}>{title}</Link>
            </h2>
            <SubInfo username={user.username} publishedDate={new Date(publishedDate)} />
            <Tags tags={tags} />
            <p>{body}</p>
        </PostItemBlock>
    );
};

const PostList = ({ posts, loading, error, showWriteButton }) => {
    if (error) {
        return <PostListBlock>There is an Error!</PostListBlock>;
    }

    return (
        <PostListBlock>
            <WritePostButtonWrapper>
                {showWriteButton && (
                    <PostButton cyan to='/write'>New Post</PostButton>
                )}
            </WritePostButtonWrapper>
            {!loading && posts && (
                <div>
                    {posts.map(post => (
                        <PostItem post={post} key={post._id} />
                    ))}
                </div>
            )}
        </PostListBlock>
    );
};

export default PostList;