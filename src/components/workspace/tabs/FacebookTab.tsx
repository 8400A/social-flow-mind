import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart3, Users, Share2, MessageCircle, TrendingUp } from "lucide-react";

export const FacebookTab = () => {
  const keyMetrics = {
    totalLikes: "145.2k",
    totalComments: "23.8k",
    totalShares: "8.9k",
    avgEngagementRate: "4.2%"
  };

  const topFormats = [
    { format: "Video Posts", percentage: 45, color: "bg-chart-facebook" },
    { format: "Image Posts", percentage: 30, color: "bg-chart-neutral" },
    { format: "Link Shares", percentage: 20, color: "bg-chart-positive" },
    { format: "Text Posts", percentage: 5, color: "bg-muted" }
  ];

  const topGroups = [
    { name: "Sustainable Living Community", members: "89k", engagement: "12.4%" },
    { name: "Zero Waste Fashion", members: "45k", engagement: "8.9%" },
    { name: "Thrift Store Finds", members: "67k", engagement: "7.2%" },
    { name: "Eco-Friendly Fashion Tips", members: "23k", engagement: "15.1%" }
  ];

  const topPosts = [
    {
      type: "Video",
      author: "Green Fashion Co.",
      content: "How to transform old jeans into a trendy jacket",
      likes: "2.1k",
      comments: "89",
      shares: "156"
    },
    {
      type: "Image",
      author: "Sustainable Style Blog",
      content: "5 sustainable fashion brands you need to know",
      likes: "1.8k",
      comments: "67",
      shares: "203"
    },
    {
      type: "Link",
      author: "EcoFashion News",
      content: "The true cost of fast fashion on our environment",
      likes: "3.2k",
      comments: "145",
      shares: "89"
    }
  ];

  return (
    <div className="p-6 space-y-6 pb-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-chart-facebook" />
              <div>
                <p className="text-sm text-muted-foreground">Total Likes</p>
                <p className="text-lg font-semibold">{keyMetrics.totalLikes}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-chart-facebook" />
              <div>
                <p className="text-sm text-muted-foreground">Total Comments</p>
                <p className="text-lg font-semibold">{keyMetrics.totalComments}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Share2 className="h-4 w-4 text-chart-facebook" />
              <div>
                <p className="text-sm text-muted-foreground">Total Shares</p>
                <p className="text-lg font-semibold">{keyMetrics.totalShares}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-chart-facebook" />
              <div>
                <p className="text-sm text-muted-foreground">Avg Engagement</p>
                <p className="text-lg font-semibold">{keyMetrics.avgEngagementRate}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Content Formats */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Top Performing Content Formats</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topFormats.map((item) => (
              <div key={item.format} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded ${item.color}`} />
                  <span className="font-medium">{item.format}</span>
                </div>
                <div className="flex items-center gap-3 min-w-[120px]">
                  <Progress value={item.percentage} className="w-20" />
                  <span className="text-sm font-medium min-w-[35px]">{item.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Groups */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Top Engaging Groups</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {topGroups.map((group, index) => (
              <div key={group.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-medium">{group.name}</div>
                    <div className="text-sm text-muted-foreground">{group.members} members</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">{group.engagement}</div>
                  <div className="text-xs text-muted-foreground">engagement rate</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Top Performing Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topPosts.map((post, index) => (
              <div key={index} className="border border-card-border rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <Badge variant="outline" className="mb-2">{post.type}</Badge>
                    <p className="font-medium text-sm">{post.author}</p>
                  </div>
                </div>
                <p className="text-sm mb-3">{post.content}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    {post.likes} likes
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-3 w-3" />
                    {post.comments} comments
                  </span>
                  <span className="flex items-center gap-1">
                    <Share2 className="h-3 w-3" />
                    {post.shares} shares
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};