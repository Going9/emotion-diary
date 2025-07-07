import type { Route } from "../../+types/root";
import { getPosts } from "./queries";

export const loader = async () => {
    const posts = await getPosts();
    return { posts };
}

export default function BambooForestPage( { loaderData }: Route.ComponentProps ) {
    return (
        <div>
            <h1>Bamboo Forest</h1>
        </div>
    )
}