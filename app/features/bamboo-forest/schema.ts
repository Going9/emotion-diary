import { text, bigint, timestamp, uuid, pgTable } from "drizzle-orm/pg-core";
import { profiles } from "../users/schema";

export const posts = pgTable("posts", {
  id: bigint("id", {mode: "number"}).primaryKey().generatedAlwaysAsIdentity(),
  profileId: uuid("profile_id").notNull().references(() => profiles.id),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});