import { useRouter } from "next/router";

export default function portfolio() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    return <p>Post : {router.query.portfolio}</p>;
}
