import { bigint, integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { profiles } from "../users/schema";

export const diary = pgTable("diary", {
  id: bigint("id", {mode: "number"}).primaryKey().generatedAlwaysAsIdentity(),
  profileId: uuid("profile_id").notNull().references(() => profiles.id),
  date: timestamp("date").notNull().defaultNow(),
  strongestEmotion: text("strongest_emotion").notNull(),
  situation: text("situation").notNull(),
  intensity: integer("intensity").notNull(),
  reaction: text("reaction").notNull(),
  physicalSensation: text("physical_sensation").notNull(),
  desiredReaction: text("desired_reaction").notNull(),
  gratitudeMoment: text("gratitude_moment").notNull(),
  selfKindWords: text("self_kind_words").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});