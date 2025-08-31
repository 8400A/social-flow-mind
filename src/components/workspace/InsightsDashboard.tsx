import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, Share, BarChart3, Download } from "lucide-react";
import { OverviewTab } from "./tabs/OverviewTab";
import { TikTokTab } from "./tabs/TikTokTab";
import { InstagramTab } from "./tabs/InstagramTab";
import { RawDataTab } from "./tabs/RawDataTab";
import { PlanTab } from "./tabs/PlanTab";
import { NotesTab } from "./tabs/NotesTab";
import { SourcesTab } from "./tabs/SourcesTab";

export const InsightsDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="h-full bg-background border-r border-panel-border">
      {/* Header */}
      <div className="border-b border-card-border bg-panel-header px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-foreground">
              Sustainable Fashion Trends (Multi-platform)
            </h1>
            <div className="flex items-center gap-4 mt-1">
              <span className="text-sm text-muted-foreground">
                Data Points: <span className="font-medium text-foreground">28,930 posts analyzed</span>
              </span>
              <Badge variant="secondary" className="text-xs">
                Last refreshed: Aug 31, 12:25 PM
              </Badge>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <RefreshCw className="h-4 w-4" />
              Refresh
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Share className="h-4 w-4" />
              Share
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <BarChart3 className="h-4 w-4" />
              Create Report
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Download className="h-4 w-4" />
              Download
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
        <TabsList className="grid w-full grid-cols-7 bg-background border-b border-card-border rounded-none px-6">
          <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            📊 Overview
          </TabsTrigger>
          <TabsTrigger value="tiktok" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            🎵 TikTok
          </TabsTrigger>
          <TabsTrigger value="instagram" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            📸 Instagram
          </TabsTrigger>
          <TabsTrigger value="rawdata" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            📈 Raw Data
          </TabsTrigger>
          <TabsTrigger value="plan" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            🗺️ Plan
          </TabsTrigger>
          <TabsTrigger value="notes" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            📝 Notes
          </TabsTrigger>
          <TabsTrigger value="sources" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            🌐 Sources
          </TabsTrigger>
        </TabsList>

        <div className="flex-1 overflow-hidden">
          <TabsContent value="overview" className="h-full m-0">
            <OverviewTab />
          </TabsContent>
          <TabsContent value="tiktok" className="h-full m-0">
            <TikTokTab />
          </TabsContent>
          <TabsContent value="instagram" className="h-full m-0">
            <InstagramTab />
          </TabsContent>
          <TabsContent value="rawdata" className="h-full m-0">
            <RawDataTab />
          </TabsContent>
          <TabsContent value="plan" className="h-full m-0">
            <PlanTab />
          </TabsContent>
          <TabsContent value="notes" className="h-full m-0">
            <NotesTab />
          </TabsContent>
          <TabsContent value="sources" className="h-full m-0">
            <SourcesTab />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};