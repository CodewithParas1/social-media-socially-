import { getProfileByUsername, getUserPosts, isFollowing } from "@/actions/profile.action";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ProfilePageClient from "./ProfilePageClient";

// ✅ Inline types only — no aliasing
export async function generateMetadata(
  { params }: { params: { username: string } }
): Promise<Metadata | undefined> {
  const user = await getProfileByUsername(params.username);
  if (!user) return;

  return {
    title: `${user.name ?? user.username}`,
    description: user.bio || `Check out ${user.username}'s profile.`,
  };
}

export default async function ProfilePageServer(
  { params }: { params: { username: string } }
) {
  const user = await getProfileByUsername(params.username);
  if (!user) notFound();

  const [posts, isCurrentUserFollowing] = await Promise.all([
    getUserPosts(user.id),
    isFollowing(user.id),
  ]);

  return (
    <ProfilePageClient
      user={user}
      posts={posts}
      isFollowing={isCurrentUserFollowing}
    />
  );
}
