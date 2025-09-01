import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart3, Repeat2, Heart, MessageCircle, TrendingUp } from "lucide-react";

export const XTab = () => {
  const keyMetrics = {
    totalLikes: "89.4k",
    totalRetweets: "12.3k",
    totalReplies: "18.7k",
    avgEngagementRate: "2.8%"
  };

  const topContentTypes = [
    { type: "Text + Images", percentage: 42, color: "bg-chart-x" },
    { type: "Text Only", percentage: 35, color: "bg-chart-neutral" },
    { type: "Links + Preview", percentage: 18, color: "bg-chart-positive" },
    { type: "Videos", percentage: 5, color: "bg-muted" }
  ];

  const trendingHashtags = [
    { hashtag: "#SustainableFashion", mentions: "8.2k", growth: "+12%" },
    { hashtag: "#ThriftFinds", mentions: "3.4k", growth: "+8%" },
    { hashtag: "#EthicalFashion", mentions: "2.9k", growth: "+15%" },
    { hashtag: "#SlowFashion", mentions: "2.1k", growth: "+6%" },
    { hashtag: "#CircularFashion", mentions: "1.8k", growth: "+22%" }
  ];

  const topPosts = [
    {
      author: "@FashionRevolution",
      handle: "Fashion Revolution",
      content: "Did you know that 73% of fashion waste ends up in landfills? It's time for a change. #SustainableFashion",
      likes: "1.2k",
      retweets: "456",
      replies: "89",
      verified: true
    },
    {
      author: "@EcoStyleGuide",
      handle: "Eco Style Guide",
      content: "Thread: 10 sustainable fashion brands that are changing the game 🧵",
      likes: "892",
      retweets: "234",
      replies: "67",
      verified: false
    },
    {
      author: "@GreenClosetTips",
      handle: "Green Closet",
      content: "Your old t-shirt can become: ✂️ Cleaning rags ✂️ Plant ties ✂️ Shopping bag Give it a second life!",
      likes: "654",
      retweets: "189",
      replies: "45",
      verified: false
    }
  ];

  return (
    <div className="p-6 space-y-6 pb-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-chart-x" />
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
              <Repeat2 className="h-4 w-4 text-chart-x" />
              <div>
                <p className="text-sm text-muted-foreground">Total Retweets</p>
                <p className="text-lg font-semibold">{keyMetrics.totalRetweets}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-chart-x" />
              <div>
                <p className="text-sm text-muted-foreground">Total Replies</p>
                <p className="text-lg font-semibold">{keyMetrics.totalReplies}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-chart-x" />
              <div>
                <p className="text-sm text-muted-foreground">Avg Engagement</p>
                <p className="text-lg font-semibold">{keyMetrics.avgEngagementRate}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Content Types */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Top Performing Content Types</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topContentTypes.map((item) => (
              <div key={item.type} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded ${item.color}`} />
                  <span className="font-medium">{item.type}</span>
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

      {/* Trending Hashtags */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Trending Hashtags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {trendingHashtags.map((hashtag, index) => (
              <div key={hashtag.hashtag} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-medium">{hashtag.hashtag}</div>
                    <div className="text-sm text-muted-foreground">{hashtag.mentions} mentions</div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="secondary" className="text-chart-positive">
                    {hashtag.growth}
                  </Badge>
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
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-sm font-bold">
                    {post.author[1]}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{post.handle}</span>
                      {post.verified && <Badge variant="secondary" className="text-xs">✓</Badge>}
                      <span className="text-sm text-muted-foreground">{post.author}</span>
                    </div>
                    <p className="text-sm mt-1">{post.content}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground pl-13">
                  <span className="flex items-center gap-1">
                    <Heart className="h-3 w-3" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <Repeat2 className="h-3 w-3" />
                    {post.retweets}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-3 w-3" />
                    {post.replies}
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