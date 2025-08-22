import { Link } from 'expo-router'
import React from 'react'

const MovieCard = ({ id, poster_path, title, vote_average, release_date }: Movie) => {
    return (
        <Link href={`movie/${id}`} asChild></Link>
    )
}

export default MovieCard