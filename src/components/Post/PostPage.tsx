// PostPage.tsx

import React, { useState } from "react";
import './PostPage.css';

const PostPage = () => {
    const [likedPosts, setLikedPosts] = useState<number[]>([]);

    const toggleLike = (index: number) => {
        setLikedPosts((prevLikedPosts) =>
            prevLikedPosts.includes(index)
                ? prevLikedPosts.filter((id) => id !== index)
                : [...prevLikedPosts, index]
        );
    };

    const imageUrls = [
        "https://img.freepik.com/free-vector/hand-drawn-flat-design-affiliate-marketing-illustration_23-2149347413.jpg?t=st=1745402635~exp=1745406235~hmac=6ff800c36b2572e0e277cf6bda9ce25fbafa8bae9e74c297b4047609692fd8cc&w=1380",
        "https://img.freepik.com/free-vector/online-job-interview-concept_23-2148628159.jpg?t=st=1745402888~exp=1745406488~hmac=29837287b27e00629a1f53267ddd8b34dff391667e64d16ef5653ef99013df5d&w=1380",
        "https://img.freepik.com/free-vector/hand-drawn-business-communication-concept_23-2149171107.jpg?t=st=1745402955~exp=1745406555~hmac=336b596020c5ccac63fb83fd105ab1b0e4a14956b982e5af946011cef2e4fd9b&w=1380",
        "https://img.freepik.com/free-vector/happy-corporate-man-done-his-job-as-vison-mission-celebrating-leadership-success-career-progress-concept-flat-illustration_1150-37384.jpg?t=st=1745403003~exp=1745406603~hmac=5f55d26e1d7f20f358ace2b31fc21f91381fa8b48efce7190d9a05c57898c9b1&w=1380",
        "https://img.freepik.com/free-vector/kids-taking-online-lessons_23-2148517076.jpg?t=st=1745403056~exp=1745406656~hmac=c07846933a814a102e4f58b4afba314b8caa0fcbd56a153e400c3600320e0881&w=1380",
        "https://img.freepik.com/premium-vector/illustration-customer-engagement-concept-with-emotional-connection-customer-brand_675567-3135.jpg?w=1380",
        "https://img.freepik.com/free-vector/business-merger-concept-flat-background-with-woman-holding-gear-surrounded-by-compositions-people-icons-vector-illustration_98292-9751.jpg?t=st=1745403209~exp=1745406809~hmac=1c644c7f04547fcd391912a566d3fac17dbe3a545f0c15e1b50617e5c4c0ff6d&w=1060",
        "https://img.freepik.com/premium-vector/joining-hands-growth-vector-illustration-concept_1076263-315.jpg?w=1380",
        "https://picsum.photos/id/1062/300/200",
        "https://picsum.photos/id/1074/300/200",
        "https://picsum.photos/id/1080/300/200",
        "https://picsum.photos/id/1084/300/200",
        "https://picsum.photos/id/1089/300/200",
        "https://picsum.photos/id/109/300/200",
        "https://picsum.photos/id/110/300/200",
        "https://img.freepik.com/free-vector/podcast-radio-station-concept-illustration_52683-51718.jpg?t=st=1745403136~exp=1745406736~hmac=c51730f8323a642b2a4c4eb81d8144daa92b0389903a9edda9ce6086394bef28&w=1380",
        "https://img.freepik.com/premium-vector/illustration-customer-engagement-concept-with-emotional-connection-customer-brand_675567-3135.jpg?w=1380",
        "https://img.freepik.com/free-vector/live-collaboration-concept-illustration_114360-2514.jpg?t=st=1745402864~exp=1745406464~hmac=7792cfa4056769bbd2bf659cf0cdb80522fc52f8a247ed209faeb5dd4fa20c3c&w=1380",
    ];


    const posts = Array.from({ length: 18 }, (_, index) => ({
        id: index,
        title: `Post Title ${index + 1}`,
        snippet: `This is a short snippet for post ${index + 1}.`,
        imageUrl: imageUrls[index],
    }));

    return (
        <div className="post-page">
            <nav className="navbar">
                <div className="navbar-logo">My Blog</div>
                <ul className="navbar-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            <div className="post-header">
                <h1>Latest Posts</h1>
                <p>Stay updated with the latest content</p>
            </div>
            <div className="posts-container">
                {posts.map((post) => (
                    <div key={post.id} className="post">
                        <div className="post-image">
                            <img src={post.imageUrl} alt={post.title} />
                        </div>
                        <div className="post-title">{post.title}</div>
                        <div className="post-snippet">{post.snippet}</div>
                        <div className="post-actions">
                            <button
                                className="like-btn"
                                onClick={() => toggleLike(post.id)}
                            >
                                {likedPosts.includes(post.id) ? "❤️" : "🤍"} Like
                            </button>
                            <button className="share-btn">Share</button>
                        </div>
                        <button className="read-more">Read More</button>
                    </div>
                ))}
            </div>
            <footer className="post-footer">© 2025 My Blog</footer>
        </div>
    );
};

export default PostPage;
