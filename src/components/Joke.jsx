import { useEffect, useState } from "react";

export default function Joke() {
    const [joke, setJoke] = useState(null);
    const [id, setId] = useState(0);

    useEffect(() => {
        const startFetching = async () => {
            const response = await fetch(
                `https://example-apis.vercel.app/api/bad-jokes/${id}`
            );
            const data = await response.json();
            setJoke(data);
        };

        startFetching();
    }, [id]);

    // const handleNextJoke = (_id) => {
    //     const startFetching = async () => {
    //         const response = await fetch(
    //             `https://example-apis.vercel.app/api/bad-jokes/${_id}`
    //         );
    //         const data = await response.json();
    //         setJoke(data);
    //     };

    //     startFetching();
    // };

    if (!joke) return <h1>Loading.....</h1>;

    return (
        <>
            <h1>{joke?.joke}</h1>
            <button type="button" onClick={() => setId(joke.nextId)}>
                {/* <button type="button" onClick={() => handleNextJoke(joke.nextId)}> */}
                Next Joke
            </button>
        </>
    );
}
