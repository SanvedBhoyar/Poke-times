import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Home extends Component {
    state = {
        posts: []
    }

    async componentDidMount() {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log('Home component is Mounted and we got our JSON data');
            this.setState({
                posts: res.data.slice(0, 10)
            });
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        );
        return (
            <div className="container" >
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

export default Home;