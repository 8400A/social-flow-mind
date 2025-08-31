import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Info, TrendingUp, Database } from "lucide-react";

export const NotesTab = () => {
  const notes = [
    {
      type: "context",
      icon: <Info className="h-4 w-4" />,
      title: "Platform-Specific Content Strategy",
      content: "The hashtag #ThriftHaul has a significantly higher engagement rate on TikTok compared to Instagram, suggesting a platform-specific content strategy is optimal.",
      severity: "info"
    },
    {
      type: "data-skew",
      icon: <TrendingUp className="h-4 w-4" />,
      title: "Data Distribution Analysis", 
      content: "A high volume of posts from X were news articles rather than consumer opinions, slightly skewing overall sentiment towards neutral. This has been factored into the 'Overview' analysis.",
      severity: "warning"
    },
    {
      type: "api-limitation",
      icon: <Database className="h-4 w-4" />,
      title: "API Access Limitations",
      content: "Could not retrieve data for 3.2% of targeted Instagram profiles due to private account settings. This represents approximately 928 accounts out of 28,930 total analyzed.",
      severity: "info"
    },
    {
      type: "trend-insight",
      icon: <TrendingUp className="h-4 w-4" />,
      title: "Emerging Trend Discovery",
      content: "The term 'upcycling' showed 240% growth in mentions compared to the previous 30-day period, indicating rapidly growing interest in DIY fashion transformation.",
      severity: "success"
    },
    {
      type: "sentiment-pattern",
      icon: <TrendingUp className="h-4 w-4" />,
      title: "Sentiment Pattern Analysis",
      content: "Videos featuring before/after transformations consistently scored higher in positive sentiment (0.85+ average) compared to educational content (0.62 average), suggesting visual proof of concept drives engagement.",
      severity: "info"
    },
    {
      type: "demographic-insight",
      icon: <Info className="h-4 w-4" />,
      title: "Audience Demographics",
      content: "Gen Z creators (ages 18-25) generated 73% of viral sustainable fashion content, with millennials (26-35) representing 22% and older demographics 5%.",
      severity: "info"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "context":
        return <Info className="h-4 w-4" />;
      case "data-skew":
        return <AlertCircle className="h-4 w-4" />;
      case "api-limitation":
        return <Database className="h-4 w-4" />;
      default:
        return <TrendingUp className="h-4 w-4" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "warning":
        return "border-l-chart-neutral bg-chart-neutral/5";
      case "success":
        return "border-l-chart-positive bg-chart-positive/5";
      case "error":
        return "border-l-chart-negative bg-chart-negative/5";
      default:
        return "border-l-primary bg-primary/5";
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "warning":
        return <Badge className="bg-chart-neutral text-black">Important</Badge>;
      case "success":
        return <Badge className="bg-chart-positive text-white">Insight</Badge>;
      case "error":
        return <Badge className="bg-chart-negative text-white">Issue</Badge>;
      default:
        return <Badge variant="outline">Note</Badge>;
    }
  };

  return (
    <div className="p-6 space-y-4 pb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Analysis Notes & Insights</CardTitle>
            <p className="text-sm text-muted-foreground">
              Important contextual insights and issues encountered during the analysis process
            </p>
          </CardHeader>
        </Card>

        <div className="space-y-4">
          {notes.map((note, index) => (
            <Card key={index} className={`border-l-4 ${getSeverityColor(note.severity)}`}>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    {getTypeIcon(note.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">[{note.type.toUpperCase().replace('-', ' ')}]</span>
                      {getSeverityBadge(note.severity)}
                    </div>
                    <h4 className="font-medium mb-2">{note.title}</h4>
                    <p className="text-sm text-muted-foreground">{note.content}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Notes Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{notes.filter(n => n.severity === 'info').length}</div>
                <div className="text-sm text-muted-foreground">Info Notes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-chart-positive">{notes.filter(n => n.severity === 'success').length}</div>
                <div className="text-sm text-muted-foreground">Insights</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-chart-neutral">{notes.filter(n => n.severity === 'warning').length}</div>
                <div className="text-sm text-muted-foreground">Important</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-chart-negative">{notes.filter(n => n.severity === 'error').length}</div>
                <div className="text-sm text-muted-foreground">Issues</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
  );
};