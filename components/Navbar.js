import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>

            </ul>
            <style jsx>{`   
            ul{
                background:green;
                width:100%;
                display:flex;
                list-style:none;
            }

            ul li a {
                color:white;
                text-decoration:underline
            }
            
            `}</style>
        </div>

    )
}

export default Navbar
