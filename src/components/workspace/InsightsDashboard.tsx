import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RefreshCw, Share, BarChart3, Download, TrendingUp, Music, Camera, Database, Map, FileText, Globe } from "lucide-react";
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
          <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground gap-2">
            <TrendingUp className="h-4 w-4" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="tiktok" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground gap-2">
            <Music className="h-4 w-4" />
            TikTok
          </TabsTrigger>
          <TabsTrigger value="instagram" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground gap-2">
            <Camera className="h-4 w-4" />
            Instagram
          </TabsTrigger>
          <TabsTrigger value="rawdata" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground gap-2">
            <Database className="h-4 w-4" />
            Raw Data
          </TabsTrigger>
          <TabsTrigger value="plan" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground gap-2">
            <Map className="h-4 w-4" />
            Plan
          </TabsTrigger>
          <TabsTrigger value="notes" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground gap-2">
            <FileText className="h-4 w-4" />
            Notes
          </TabsTrigger>
          <TabsTrigger value="sources" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground gap-2">
            <Globe className="h-4 w-4" />
            Sources
          </TabsTrigger>
        </TabsList>

        <div className="flex-1 overflow-hidden">
          <TabsContent value="overview" className="h-full m-0">
            <ScrollArea className="h-full">
              <OverviewTab />
            </ScrollArea>
          </TabsContent>
          <TabsContent value="tiktok" className="h-full m-0">
            <ScrollArea className="h-full">
              <TikTokTab />
            </ScrollArea>
          </TabsContent>
          <TabsContent value="instagram" className="h-full m-0">
            <ScrollArea className="h-full">
              <InstagramTab />
            </ScrollArea>
          </TabsContent>
          <TabsContent value="rawdata" className="h-full m-0">
            <ScrollArea className="h-full">
              <RawDataTab />
            </ScrollArea>
          </TabsContent>
          <TabsContent value="plan" className="h-full m-0">
            <ScrollArea className="h-full">
              <PlanTab />
            </ScrollArea>
          </TabsContent>
          <TabsContent value="notes" className="h-full m-0">
            <ScrollArea className="h-full">
              <NotesTab />
            </ScrollArea>
          </TabsContent>
          <TabsContent value="sources" className="h-full m-0">
            <ScrollArea className="h-full">
              <SourcesTab />
            </ScrollArea>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};