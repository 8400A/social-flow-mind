import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export const OverviewTab = () => {
  const sentimentData = [
    { label: "Positive", value: 68, color: "bg-chart-positive" },
    { label: "Neutral", value: 22, color: "bg-chart-neutral" },
    { label: "Negative", value: 10, color: "bg-chart-negative" }
  ];

  const platformData = [
    { platform: "TikTok", percentage: 55, color: "bg-chart-tiktok" },
    { platform: "Instagram", percentage: 30, color: "bg-chart-instagram" },
    { platform: "X", percentage: 10, color: "bg-chart-x" },
    { platform: "Facebook", percentage: 5, color: "bg-chart-facebook" }
  ];

  const topInfluencers = [
    { name: "@eco.threads", platform: "TikTok", followers: "152.3k", engagement: "8.2%" },
    { name: "@vintage.vogue", platform: "Instagram", followers: "88.1k", engagement: "6.4%" },
    { name: "@FashionWatch", platform: "X", followers: "450k", engagement: "2.1%" },
    { name: "@SustainableStyle", platform: "Instagram", followers: "76.8k", engagement: "7.9%" },
    { name: "@ThriftQueenTok", platform: "TikTok", followers: "203.5k", engagement: "9.1%" }
  ];

  const topThemes = [
    "Upcycling", "ThriftHaul", "DIYFashion", "EthicalBrands", "SlowFashion", 
    "Vintage", "SecondHand", "EcoFriendly", "Sustainability", "ZeroWaste"
  ];

  return (
    <div className="p-6 space-y-6 pb-16">
        {/* Cross-Platform Sentiment */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Cross-Platform Sentiment (30-day period)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sentimentData.map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded ${item.color}`} />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-3 min-w-[120px]">
                    <Progress value={item.value} className="w-20" />
                    <span className="text-sm font-medium min-w-[35px]">{item.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Platform Volume Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Platform Volume Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {platformData.map((item) => (
                <div key={item.platform} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded ${item.color}`} />
                    <span className="font-medium">{item.platform}</span>
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

        {/* Top Overall Themes */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Top Overall Themes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {topThemes.map((theme, index) => (
                <Badge 
                  key={theme} 
                  variant="secondary" 
                  className={`text-sm ${index < 3 ? 'bg-primary text-primary-foreground' : ''}`}
                >
                  #{theme}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top 5 Influencers */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Top 5 Influencers (Overall)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topInfluencers.map((influencer, index) => (
                <div key={influencer.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium">{influencer.name}</div>
                      <div className="text-sm text-muted-foreground">{influencer.platform}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{influencer.followers}</div>
                    <div className="text-xs text-muted-foreground">{influencer.engagement} engagement</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
  );
};