import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, Clock } from "lucide-react";

export const PlanTab = () => {
  const executionSteps = [
    {
      id: "QUERY",
      title: "Access APIs for all specified platforms with the keyword set",
      status: "completed",
      description: "Successfully connected to TikTok, Instagram, X, and Facebook APIs"
    },
    {
      id: "FILTER", 
      title: "Isolate posts within the defined timeframe",
      status: "completed",
      description: "Filtered content from 2025-07-31 to 2025-08-30"
    },
    {
      id: "EXTRACT",
      title: "Scrape public post metadata",
      status: "completed", 
      description: "Extracted likes, comments, shares, user info, and captions from 28,930 posts"
    },
    {
      id: "ANALYZE-NLP",
      title: "Apply sentiment analysis model to post captions",
      status: "completed",
      description: "Processed 50,000 comments using advanced NLP algorithms"
    },
    {
      id: "ANALYZE-MEDIA",
      title: "Identify top audio on TikTok; categorize content formats",
      status: "completed",
      description: "Analyzed video content and audio trends across platforms"
    },
    {
      id: "SYNTHESIZE",
      title: "Aggregate all data and generate visualizations",
      status: "completed",
      description: "Created comprehensive dashboard with cross-platform insights"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-chart-positive" />;
      case "in-progress":
        return <Clock className="h-5 w-5 text-chart-neutral" />;
      default:
        return <Circle className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-chart-positive text-white">Completed</Badge>;
      case "in-progress":
        return <Badge className="bg-chart-neutral text-black">In Progress</Badge>;
      default:
        return <Badge variant="outline">Pending</Badge>;
    }
  };

  return (
    <div className="p-6 space-y-6 pb-8">
        {/* Objective */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Analysis Objective</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">
              Analyze key trends in <strong>'sustainable fashion'</strong> on TikTok, Instagram, X, and Facebook over the last 30 days.
            </p>
          </CardContent>
        </Card>

        {/* Parameters */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Analysis Parameters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-chart-tiktok text-white">TikTok</Badge>
                  <Badge className="bg-chart-instagram text-white">Instagram</Badge>
                  <Badge className="bg-chart-x text-white">X</Badge>
                  <Badge className="bg-chart-facebook text-white">Facebook</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Timeframe</h4>
                <p className="text-sm text-muted-foreground">2025-07-31 to 2025-08-30</p>
              </div>
              <div className="col-span-2">
                <h4 className="font-medium mb-2">Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">#SustainableFashion</Badge>
                  <Badge variant="outline">#ThriftHaul</Badge>
                  <Badge variant="outline">upcycling</Badge>
                  <Badge variant="outline">ethical fashion</Badge>
                  <Badge variant="outline">#SlowFashion</Badge>
                  <Badge variant="outline">#EcoFriendly</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Execution Steps */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Execution Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {executionSteps.map((step, index) => (
                <div key={step.id} className="flex gap-4 p-4 rounded-lg border border-card-border">
                  <div className="flex-shrink-0 mt-1">
                    {getStatusIcon(step.status)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-sm bg-muted px-2 py-1 rounded">
                        [{step.id}]
                      </span>
                      {getStatusBadge(step.status)}
                    </div>
                    <h4 className="font-medium mb-1">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Execution Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-chart-positive">6/6</div>
                <div className="text-sm text-muted-foreground">Steps Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">28,930</div>
                <div className="text-sm text-muted-foreground">Posts Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground">Platforms Covered</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
  );
};