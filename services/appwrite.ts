//track search by user
import { Client, Databases, ID, Query } from "react-native-appwrite";
const DATABASE_ID: string = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID: string = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;
const ENDPOINT: string = process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!;
const PROJECT_ID: string = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!;

const client = new Client().setEndpoint(ENDPOINT).setProject(PROJECT_ID);
const database = new Databases(client)
export const updateSearchCount = async (query: string, movie: Movie) => {
    try {
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.equal('searchTerm', query)
        ])
        if (result.documents.length > 0) {
            const existingMovie = result.documents[0];
            await database.updateDocument(
                DATABASE_ID,
                COLLECTION_ID,
                existingMovie.$id,
                {
                    count: existingMovie.count + 1
                }
            )
        }
        else {
            await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
                searchTerm: query,
                movie_id: movie.id,
                count: 1,
                title: movie.title,
                poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            })
        }
    } catch (err) {
        console.log(err)
        throw err;
    }
    //check if the record of that search has already been stored
    //if the document is found increment the searchCount field
    //if no document found create a new document in Appwrite database -> 1
}

export const getTrendingMovies = async (): Promise<TrendingMovie[] | undefined> => {
    try {
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.limit(5),
            Query.orderDesc('count')
        ])

        return result.documents as unknown as TrendingMovie[];
    }
    catch (err) {
        console.log(err)
        return undefined;
    }
}