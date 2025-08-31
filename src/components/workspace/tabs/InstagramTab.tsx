import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Image } from "lucide-react";

export const InstagramTab = () => {
  const keyMetrics = [
    { label: "Total Likes", value: "2.1M", change: "+8%" },
    { label: "Total Comments", value: "156k", change: "+12%" },
    { label: "Posts Analyzed", value: "12,430", change: "" }
  ];

  const contentFormats = [
    { format: "Reels", engagement: 65, color: "bg-chart-instagram" },
    { format: "Carousels", engagement: 25, color: "bg-chart-positive" },
    { format: "Single Images", engagement: 10, color: "bg-chart-neutral" }
  ];

  const topBrands = [
    { name: "Patagonia", mentions: "2.1k", sentiment: "positive" },
    { name: "Reformation", mentions: "1.8k", sentiment: "positive" },
    { name: "Everlane", mentions: "1.5k", sentiment: "positive" },
    { name: "Eileen Fisher", mentions: "1.2k", sentiment: "positive" },
    { name: "Stella McCartney", mentions: "980", sentiment: "positive" }
  ];

  const topPosts = [
    {
      creator: "@vintage.vogue",
      type: "Carousel",
      caption: "A deep dive into why I choose thrift stores over fast fashion. 🌿",
      likes: "8.2k",
      comments: "451",
      engagement: "6.4%"
    },
    {
      creator: "@sustainable.sarah",
      type: "Reel",
      caption: "3 ways to style one thrifted dress for every season",
      likes: "12.1k",
      comments: "623",
      engagement: "8.1%"
    },
    {
      creator: "@eco.fashionista",
      type: "Carousel",
      caption: "My sustainable capsule wardrobe essentials",
      likes: "6.8k",
      comments: "289",
      engagement: "5.9%"
    }
  ];

  return (
    <div className="p-6 space-y-6 pb-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-4">
          {keyMetrics.map((metric) => (
            <Card key={metric.label}>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-chart-instagram">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
                {metric.change && (
                  <Badge variant="secondary" className="mt-1 text-xs">
                    {metric.change}
                  </Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content Format Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Top Performing Content Formats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {contentFormats.map((item) => (
                <div key={item.format} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded ${item.color}`} />
                    <span className="font-medium">{item.format}</span>
                  </div>
                  <div className="flex items-center gap-3 min-w-[120px]">
                    <Progress value={item.engagement} className="w-20" />
                    <span className="text-sm font-medium min-w-[35px]">{item.engagement}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Collaborating Brands */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Top Collaborating Brands</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topBrands.map((brand) => (
                <div key={brand.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <div className="font-medium">{brand.name}</div>
                    <div className="text-sm text-muted-foreground">{brand.mentions} mentions</div>
                  </div>
                  <Badge variant="secondary" className="text-xs bg-chart-positive/20 text-chart-positive">
                    {brand.sentiment}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Example Media */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Example Media - Top Performing Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPosts.map((post, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-card-border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{post.creator}</span>
                      <Badge variant="outline" className="text-xs">{post.type}</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">{post.caption}</div>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span>{post.likes} likes</span>
                      <span>{post.comments} comments</span>
                      <span>{post.engagement} engagement</span>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-chart-instagram/10 rounded-lg flex items-center justify-center">
                    <Image className="h-6 w-6 text-chart-instagram" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
  );
};