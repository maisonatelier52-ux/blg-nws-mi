import { redirect } from "next/navigation";
import { CATEGORIES } from "@/lib/news";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    slug: cat.slug,
  }));
}

export default async function LegacyCategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  redirect(`/${slug}`);
}
