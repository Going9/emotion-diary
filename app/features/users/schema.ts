import { pgEnum, pgSchema, pgTable, text, uuid } from "drizzle-orm/pg-core";

const users = pgSchema("auth").table("users", {
  id: uuid("id").primaryKey(),
});

// User roles and their permissions:
// - admin: Can delete posts in bamboo-forest, manage users
// - user: Can create posts not delete
export const role = pgEnum("role", [
  "admin",
  "user",
]);

export const profiles = pgTable("profiles", {
  id: uuid("id")
    .primaryKey()
    .references(() => users.id, {
      onDelete: "cascade",
    }),
  avatar: text("avatar"),
  name: text("name").notNull(),
  userName: text("user_name").notNull(),
  email: text("email").notNull(),
  role: role().default("user").notNull(),
});
