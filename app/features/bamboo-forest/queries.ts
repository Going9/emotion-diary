import db from "~/db"
import { posts } from "./schema";
import { desc } from "drizzle-orm";

export const getPosts = async () => {
    const allPosts = await db
        .select({
            id: posts.id,
            content: posts.content,
            createdAt: posts.createdAt,
            profileId: posts.profileId,
        })
        .from(posts);
    return allPosts;
}