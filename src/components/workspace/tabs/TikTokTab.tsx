import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, ArrowRight, Play } from "lucide-react";

export const TikTokTab = () => {
  const keyMetrics = [
    { label: "Total Views", value: "8.2M", change: "+15%" },
    { label: "Average Engagement Rate", value: "7.8%", change: "+2.1%" },
    { label: "Videos Analyzed", value: "8,500", change: "" }
  ];

  const topAudio = [
    { name: "Aesthetic Lo-fi - by ChillBeats", videos: "1.2k", trend: "up" },
    { name: "Original Audio - by @GreenCreator", videos: "850", trend: "up" },
    { name: "Sustainable Vibes Mix", videos: "642", trend: "down" },
    { name: "DIY Fashion Beat", videos: "534", trend: "up" },
    { name: "Thrift Store Anthem", videos: "412", trend: "stable" }
  ];

  const visualThemes = [
    "Before & After Transformations",
    "Sewing Machine Close-ups", 
    "Store Walkthroughs",
    "Outfit of the Day",
    "DIY Process Videos"
  ];

  const topVideos = [
    {
      creator: "@eco.threads",
      title: "5 upcycling hacks that will blow your mind",
      views: "425k",
      likes: "25.1k",
      engagement: "8.2%"
    },
    {
      creator: "@ThriftQueenTok",
      title: "I spent $20 at Goodwill and made 3 outfits",
      views: "312k",
      likes: "18.7k",
      engagement: "7.9%"
    },
    {
      creator: "@SustainableSophie",
      title: "Why fast fashion is destroying our planet",
      views: "289k",
      likes: "16.2k",
      engagement: "6.8%"
    }
  ];

  return (
    <div className="p-6 space-y-6 pb-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-4">
          {keyMetrics.map((metric) => (
            <Card key={metric.label}>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-chart-tiktok">{metric.value}</div>
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

        {/* Top Performing Audio */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Top Performing Audio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topAudio.map((audio) => (
                <div key={audio.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <div className="font-medium">{audio.name}</div>
                    <div className="text-sm text-muted-foreground">Used in {audio.videos} videos</div>
                  </div>
                  <Badge 
                    variant={audio.trend === 'up' ? 'default' : audio.trend === 'down' ? 'destructive' : 'secondary'}
                    className="text-xs gap-1"
                  >
                    {audio.trend === 'up' ? <TrendingUp className="h-3 w-3" /> : 
                     audio.trend === 'down' ? <TrendingDown className="h-3 w-3" /> : 
                     <ArrowRight className="h-3 w-3" />}
                    {audio.trend}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Visual Themes */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Key Visual Themes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              {visualThemes.map((theme) => (
                <Badge key={theme} variant="outline" className="justify-center p-2">
                  {theme}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Performing Videos */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Example Media - Top Performing Videos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topVideos.map((video, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-card-border rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium">{video.creator}</div>
                    <div className="text-sm text-muted-foreground mt-1">{video.title}</div>
                    <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                      <span>{video.views} views</span>
                      <span>{video.likes} likes</span>
                      <span>{video.engagement} engagement</span>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-chart-tiktok/10 rounded-lg flex items-center justify-center">
                    <Play className="h-6 w-6 text-chart-tiktok" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
  );
};