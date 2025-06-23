import { getProfileByUsername, getUserPosts, isFollowing } from "@/actions/profile.action";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ProfilePageClient from "./ProfilePageClient";

// ✅ Define expected route parameters
interface ProfilePageProps {
  params: {
    username: string;
  };
}

// ✅ Dynamically generate metadata for the profile page
export async function generateMetadata(
  { params }: ProfilePageProps
): Promise<Metadata | undefined> {
  const user = await getProfileByUsername(params.username);
  if (!user) return;

  return {
    title: `${user.name ?? user.username}`,
    description: user.bio || `Check out ${user.username}'s profile.`,
  };
}

// ✅ Main server component for profile page
export default async function ProfilePageServer({ params }: ProfilePageProps) {
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
