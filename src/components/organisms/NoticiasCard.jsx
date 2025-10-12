import React from 'react';
import Button from '../atoms/Button';
import Image from '../atoms/Image';
import NoticiasBodyCard from '../molecules/NoticiasBodyCard';

function NewsCard({ newsItem }) {
    return (
        <div className="col-md-6 mb-3">
            <div className="card news-card shadow-sm h-100">
                {newsItem.image && (
                    <Image
                        src={newsItem.image}
                        alt={newsItem.title}
                        className="card-img-top"
                    />
                )}
                <div className="card-body d-flex flex-column">
                    <NoticiasBodyCard
                        titulo={newsItem.titulo}
                        fecha={newsItem.fecha}
                        contenido={newsItem.contenido}
                    />
                    <Button
                        variant="primary"
                        className="mt-auto"
                        onClick={() => window.open(newsItem.link, "_blank")}
                    >
                        Leer más
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default NewsCard;