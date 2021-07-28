import React from "react";
import { fetchAPI } from "../lib/api";

const Home = ({ articles, categories, homepage }) => {
    console.log(articles);
    return (
        <div>
            {articles.map((item, index)=>
                <div key={index}>
                    <h1>{item.title}</h1>
                </div>
            )}
        </div>
    );
};

export async function getStaticProps() {
    // Run API calls in parallel
    const [articles, categories, homepage] = await Promise.all([
        fetchAPI("/articles"),
        fetchAPI("/categories"),
        fetchAPI("/homepage"),
    ]);

    return {
        props: { articles, categories, homepage },
        revalidate: 1,
    };
}

export default Home;