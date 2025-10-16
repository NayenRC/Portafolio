import React from 'react';
import { Container } from 'react-bootstrap';
import NoticiasCard from '../components/organisms/NoticiasCard';
import news from '../data/Noticias.json';
import '../styles/pages/Noticias.css';

function Noticias() {
    return (
        <Container className="mt-5">
            <div className="news-section">
                <h2 className="news-title text-center">News</h2>

                <div className="row justify-content-center">
                    {news.map((item) => (
                        <NoticiasCard key={item.id} newsItem={item} />
                    ))}
                </div>
            </div>
        </Container>
    );
}

export default Noticias;
