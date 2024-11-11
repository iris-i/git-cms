import { NextResponse } from "next/server";
import octokit from "@/lib/octokit";
import { slugify } from "@/lib/utils";

interface PrefData {
  title: string;
  style: string;
  githubRepo: string;
  githubBranch: string;
  slug: string;
  primaryColor: string;
}

export async function POST(request: Request) {
  try {
    const prefData: PrefData = await request.json();
    const { title, style, githubBranch, githubRepo, slug, primaryColor } = prefData;

    // Structure post data as JSON content
    const content = JSON.stringify({ title, style, githubBranch, githubRepo, slug, primaryColor }, null, 2);
    const message = `Updating preferences: ${title}`;

    const path = `data/content/preferences.json`;

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
