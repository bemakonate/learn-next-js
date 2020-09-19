import useSWR from 'swr'
import fetch from 'unfetch';

const fetcher = async (path) => {
    console.log(path);
    const res = await fetch(path);
    return res.json();
}

const user = () => {
    const { data, error } = useSWR('/api/users/23', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    // render data
    return <div>hello {data.name}!</div>

}

export default user
