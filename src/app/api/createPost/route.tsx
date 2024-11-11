import { NextResponse } from "next/server";
import octokit from "@/lib/octokit";
import { slugify } from "@/lib/utils";

interface PostData {
  title: string;
  author: string;
  status: "draft" | "publish";
  body: string;
  slug: string;
  hero?: string;
  tag?: string;
}

export async function POST(request: Request) {
  try {
    const postData: PostData = await request.json();
    const { title, author, status, body, slug, hero, tag } = postData;

    // Structure post data as JSON content
    const content = JSON.stringify({ title, author, status, body, slug, hero, tag }, null, 2);
    const message = `Create post: ${title}`;

    const sanitizedSlug = slugify(slug);
    const path = `data/content/posts/${sanitizedSlug}.json`;

    // Use Octokit to create or update the file in GitHub repository
    const response = await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
      owner: process.env.GITHUB_OWNER || 'iris-i',
      repo: process.env.GITHUB_REPO || 'git-cms',
      path: path,
      message: message,
      committer: {
        name: process.env.AUTHOR || "Iris I.",
        email: process.env.AUTHOR_EMAIL || "email@example.com"
      },
      content: Buffer.from(content).toString("base64"), // Encode content in Base64,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })

    return NextResponse.json({ message: "Post created successfully", data: response.data });
  } catch (error) {
    console.error("GitHub API error:", error);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}
