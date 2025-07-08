"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const posts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    author: {
      name: "Sarah Wilson",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    status: "published",
    views: 2500,
    lastUpdated: "2024-01-15",
    progress: 100,
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    author: {
      name: "Mike Johnson",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    status: "draft",
    views: 1800,
    lastUpdated: "2024-01-14",
    progress: 60,
  },
  {
    id: 3,
    title: "Mastering TypeScript",
    author: {
      name: "Emily Brown",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    status: "review",
    views: 3200,
    lastUpdated: "2024-01-13",
    progress: 85,
  },
];

export function BlogPostsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Post Title</TableHead>
          <TableHead>Author</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Views</TableHead>
          <TableHead>Last Updated</TableHead>
          <TableHead>Progress</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.map((post) => (
          <TableRow key={post.id}>
            <TableCell className="font-medium">{post.title}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.author.avatar} />
                  <AvatarFallback>
                    {post.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <span>{post.author.name}</span>
              </div>
            </TableCell>
            <TableCell>
              <Badge
                variant={
                  post.status === "published"
                    ? "success"
                    : post.status === "review"
                      ? "warning"
                      : "secondary"
                }
              >
                {post.status}
              </Badge>
            </TableCell>
            <TableCell>{post.views.toLocaleString()}</TableCell>
            <TableCell>{post.lastUpdated}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Progress value={post.progress} className="w-[60px]" />
                <span className="text-sm text-muted-foreground">
                  {post.progress}%
                </span>
              </div>
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <MoreVertical className="h-5 w-5 text-muted-foreground" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>View</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
