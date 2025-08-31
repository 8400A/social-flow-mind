import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Download } from "lucide-react";

export const RawDataTab = () => {
  const rawData = [
    {
      id: "7821",
      platform: "TikTok",
      postUrl: "tiktok.com/.../123",
      postType: "Video",
      username: "@eco.threads",
      followerCount: "152.3k",
      timestamp: "2025-08-30 18:45:11",
      content: "My top 5 upcycling hacks! You won't believe #5! #SustainableFashion #DIY",
      likes: "25.1k",
      comments: "1204",
      sentiment: "Positive (0.88)"
    },
    {
      id: "7822",
      platform: "Instagram",
      postUrl: "instagr.am/.../xyz",
      postType: "Carousel",
      username: "@vintage.vogue",
      followerCount: "88.1k",
      timestamp: "2025-08-30 15:20:03",
      content: "A deep dive into why I choose thrift stores over fast fashion. 🌿 #ThriftHaul",
      likes: "8.2k",
      comments: "451",
      sentiment: "Positive (0.75)"
    },
    {
      id: "7823",
      platform: "X",
      postUrl: "x.com/.../abc",
      postType: "Text+Link",
      username: "@FashionWatch",
      followerCount: "450k",
      timestamp: "2025-08-29 09:10:55",
      content: "New report shows consumers are demanding more transparency from brands. #EthicalFashion",
      likes: "560",
      comments: "98",
      sentiment: "Neutral (0.15)"
    },
    {
      id: "7824",
      platform: "Instagram",
      postUrl: "instagr.am/.../def",
      postType: "Reel",
      username: "@sustainable.sarah",
      followerCount: "64.2k",
      timestamp: "2025-08-29 14:22:17",
      content: "3 ways to style one thrifted dress for every season ✨ #ThriftFind",
      likes: "12.1k",
      comments: "623",
      sentiment: "Positive (0.91)"
    },
    {
      id: "7825",
      platform: "Facebook",
      postUrl: "facebook.com/.../ghi",
      postType: "Article Share",
      username: "Sustainable Living Group",
      followerCount: "23.5k",
      timestamp: "2025-08-28 11:35:42",
      content: "Why the fashion industry needs a sustainability revolution - must read article",
      likes: "186",
      comments: "34",
      sentiment: "Neutral (0.22)"
    }
  ];

  const getPlatformBadge = (platform: string) => {
    const colors = {
      TikTok: "bg-chart-tiktok text-white",
      Instagram: "bg-chart-instagram text-white", 
      X: "bg-chart-x text-white",
      Facebook: "bg-chart-facebook text-white"
    };
    return colors[platform as keyof typeof colors] || "bg-muted";
  };

  const getSentimentBadge = (sentiment: string) => {
    if (sentiment.includes("Positive")) return "bg-chart-positive text-white";
    if (sentiment.includes("Negative")) return "bg-chart-negative text-white";
    return "bg-chart-neutral text-black";
  };

  return (
    <div className="p-6 space-y-4 pb-8">
        {/* Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search content, usernames, or hashtags..." className="pl-10" />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Export CSV
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Data Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Raw Data Analysis - Detailed View</CardTitle>
            <p className="text-sm text-muted-foreground">
              Showing {rawData.length} of 28,930 total posts
            </p>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-card-border bg-muted/50">
                  <tr>
                    <th className="text-left p-3 font-medium">ID</th>
                    <th className="text-left p-3 font-medium">Platform</th>
                    <th className="text-left p-3 font-medium">Type</th>
                    <th className="text-left p-3 font-medium">Username</th>
                    <th className="text-left p-3 font-medium">Followers</th>
                    <th className="text-left p-3 font-medium">Timestamp</th>
                    <th className="text-left p-3 font-medium">Content</th>
                    <th className="text-left p-3 font-medium">Likes</th>
                    <th className="text-left p-3 font-medium">Comments</th>
                    <th className="text-left p-3 font-medium">Sentiment</th>
                  </tr>
                </thead>
                <tbody>
                  {rawData.map((row, index) => (
                    <tr key={row.id} className={`border-b border-card-border ${index % 2 === 0 ? 'bg-background' : 'bg-muted/20'}`}>
                      <td className="p-3 text-sm font-mono">{row.id}</td>
                      <td className="p-3">
                        <Badge className={`${getPlatformBadge(row.platform)} text-xs`}>
                          {row.platform}
                        </Badge>
                      </td>
                      <td className="p-3 text-sm">{row.postType}</td>
                      <td className="p-3 text-sm font-medium">{row.username}</td>
                      <td className="p-3 text-sm">{row.followerCount}</td>
                      <td className="p-3 text-xs font-mono">{row.timestamp}</td>
                      <td className="p-3 text-sm max-w-xs truncate" title={row.content}>
                        {row.content}
                      </td>
                      <td className="p-3 text-sm">{row.likes}</td>
                      <td className="p-3 text-sm">{row.comments}</td>
                      <td className="p-3">
                        <Badge className={`${getSentimentBadge(row.sentiment)} text-xs`}>
                          {row.sentiment}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Pagination */}
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            Showing 1-5 of 28,930 results
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </div>
  );
};