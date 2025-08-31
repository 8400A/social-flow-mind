import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Hash, Users, Database } from "lucide-react";

export const SourcesTab = () => {
  const hashtagsSources = [
    "#SustainableFashion", "#ThriftHaul", "#EcoFriendlyFashion", "#SlowFashion",
    "#Upcycling", "#Vintage", "#SecondHand", "#EcoFriendly", "#Sustainability", 
    "#ZeroWaste", "#EthicalFashion", "#ConsciousFashion", "#GreenFashion",
    "#CircularFashion", "#FashionRevolution", "#MindfulFashion"
  ];

  const influencerAccounts = [
    { platform: "Instagram", handle: "@eco.threads", url: "instagram.com/eco.threads", verified: true },
    { platform: "Instagram", handle: "@vintage.vogue", url: "instagram.com/vintage.vogue", verified: false },
    { platform: "Instagram", handle: "@sustainable.sarah", url: "instagram.com/sustainable.sarah", verified: true },
    { platform: "TikTok", handle: "@ThriftQueenTok", url: "tiktok.com/@ThriftQueenTok", verified: true },
    { platform: "TikTok", handle: "@SustainableSophie", url: "tiktok.com/@SustainableSophie", verified: false },
    { platform: "X", handle: "@FashionWatch", url: "x.com/FashionWatch", verified: true },
    { platform: "X", handle: "@EcoFashionNews", url: "x.com/EcoFashionNews", verified: false },
    { platform: "Facebook", handle: "Sustainable Living Group", url: "facebook.com/groups/sustainableliving", verified: false }
  ];

  const apiSources = [
    { name: "TikTok Research API", url: "developers.tiktok.com/doc/research-api-specs-query-videos", status: "active" },
    { name: "Instagram Basic Display API", url: "developers.facebook.com/docs/instagram-basic-display-api", status: "active" },
    { name: "X API v2", url: "developer.twitter.com/en/docs/twitter-api", status: "active" },
    { name: "Facebook Graph API", url: "developers.facebook.com/docs/graph-api", status: "limited" },
    { name: "Meta Content Library API", url: "developers.facebook.com/docs/content-library-api", status: "active" }
  ];

  const externalSources = [
    { name: "Social Media Trends Database", url: "socialtrends.com/api", type: "Third-party API" },
    { name: "Influencer Analytics Platform", url: "influencerdb.com", type: "Data Provider" },
    { name: "Sentiment Analysis Model", url: "huggingface.co/models", type: "ML Model" },
    { name: "Hashtag Analytics Service", url: "hashtaganalytics.com", type: "Analytics Platform" }
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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-chart-positive text-white">Active</Badge>;
      case "limited":
        return <Badge className="bg-chart-neutral text-black">Limited</Badge>;
      case "inactive":
        return <Badge className="bg-chart-negative text-white">Inactive</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="h-full overflow-auto">
      <div className="p-6 space-y-6">
        {/* Hashtags Analyzed */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Hash className="h-5 w-5" />
              Hashtags Analyzed
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Primary hashtags and keywords used for content discovery
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {hashtagsSources.map((hashtag, index) => (
                <Badge 
                  key={hashtag} 
                  variant={index < 4 ? "default" : "outline"}
                  className={index < 4 ? "bg-primary text-primary-foreground" : ""}
                >
                  {hashtag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Influencer Accounts */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Users className="h-5 w-5" />
              Key Influencer Accounts
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Primary accounts analyzed for content and engagement patterns
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {influencerAccounts.map((account, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3">
                    <Badge className={`${getPlatformBadge(account.platform)} text-xs`}>
                      {account.platform}
                    </Badge>
                    <span className="font-medium">{account.handle}</span>
                    {account.verified && (
                      <Badge variant="secondary" className="text-xs">✓ Verified</Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{account.url}</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* API Data Sources */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Database className="h-5 w-5" />
              API Data Sources
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Platform APIs and endpoints used for data collection
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {apiSources.map((source, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">{source.name}</span>
                    {getStatusBadge(source.status)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{source.url}</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* External Data Sources */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <ExternalLink className="h-5 w-5" />
              External Data Sources
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Third-party services and tools used for enhanced analysis
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {externalSources.map((source, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">{source.name}</span>
                    <Badge variant="outline" className="text-xs">{source.type}</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{source.url}</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Data Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Data Collection Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{hashtagsSources.length}</div>
                <div className="text-sm text-muted-foreground">Hashtags</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{influencerAccounts.length}</div>
                <div className="text-sm text-muted-foreground">Key Accounts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{apiSources.length}</div>
                <div className="text-sm text-muted-foreground">API Sources</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground">Platforms</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};